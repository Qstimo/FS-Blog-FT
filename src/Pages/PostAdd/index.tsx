import React from 'react'

import s from './PostAdd.module.scss'
import { useInput } from '../../hooks/validation'
import Button from '../../Ui/Button'
import { RemoveSvg } from '../../Img/svg'
import axios, { API_URL } from '../../Utils/axios'
import { useNavigate, useParams } from 'react-router-dom'
import ValidationErorrs from '../../Components/VlidationErorrs'


const PostAdd: React.FC = () => {
    const title = useInput('', { isEmpty: true, minLength: 3, });
    const tags = useInput('', {});
    const text = useInput('', { minLength: 3, });
    const navigate = useNavigate();
    const { id } = useParams();
    const isEdit = Boolean(id)
    const [img, setImg] = React.useState('');

    React.useEffect(() => {
        if (isEdit) {
            axios
                .get(`posts/${id}`)
                .then(({ data }) => {
                    title.setValue(data.title);
                    tags.setValue(data.tags.join(' '));
                    text.setValue(data.text);
                    setImg(data.imageUrl)
                }).catch(erorr => {
                    console.warn(erorr);
                })
        }
    }, []);


    const imgRef = React.useRef<HTMLInputElement | null>(null)


    const handleSubmitPost = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const files = {
                title: title.value,
                tags: tags.value,
                text: text.value,
                imageUrl: img
            };
            const { data } = isEdit
                ? await axios.patch(`/posts/${id}`, files)
                : await axios.post('/posts', files)
            const _id = isEdit ? id : data._id;
            // setTimeout(() => {  }, 200);
            navigate(`/posts/${_id}`);
        } catch (error) {
            console.warn(error);
            alert('Ошибка загрузки');
        }

    }

    const handleCangeFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
        try {
            const formData = new FormData();
            const file = e.target.files?.[0];
            if (file) {
                formData.append('image', file);
                const { data } = await axios.post('/uploads', formData);
                setImg(data.url);
            }
        } catch (error) {
            alert('Error uploading')
        }
    }
    return (

        <div className={s.root}>
            <div className={s.imgLoading} >
                {Boolean(img) ? (
                    <><img className={s.image} src={`${API_URL}:4444${img}`} alt="uploading img" />
                        <button className={s.deleteImg} onClick={() => setImg('')} ><RemoveSvg /></button></>
                ) : <Button onClick={() => imgRef.current?.click()} children='Загрузить превью' />}

                <input ref={imgRef} onChange={handleCangeFile} type="file" hidden />
            </div>
            <form onSubmit={handleSubmitPost} className={s.form}>
                <label htmlFor="">
                    <ValidationErorrs array={title.stringErorr} />
                    <input className={s.title} value={title.value} onBlur={e => title.onBlur(e)} onChange={e => title.onChange(e)} type="text" placeholder='Заголовок статьи' />
                </label>
                <label htmlFor="">
                    <ValidationErorrs array={tags.stringErorr} />
                    <input value={tags.value} onBlur={e => tags.onBlur(e)} onChange={e => tags.onChange(e)} type="text" placeholder='#тэги' />
                </label>
                <ValidationErorrs array={text.stringErorr} />
                <textarea onBlur={e => text.onBlur(e)} onChange={e => text.onChange(e)} value={text.value} placeholder='Текст статьи' className={s.text}></textarea>
                {/* <EditorText htmlText={value} onChangeHTMLText={setValue} /> */}

                <Button children='Отправить' />
            </form>

        </div>

    )
}

export default PostAdd