import React from 'react'
import s from './PostAdd.module.scss'
import { useInput } from '../../hooks/validation'
import axios from 'axios'
import Button from '../../Ui/Button'
import TextEditor from '../../Components/TextEditor'
import { EditorText } from '../../Components/EditorText/TextEditor'


const PostAdd: React.FC = () => {
    const title = useInput('', { isEmpty: true, minLength: 3, });
    const tags = useInput('', {});

    const imgRef = React.useRef<HTMLInputElement | null>(null)

    const [img, setImg] = React.useState('');

    const handleCangeFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
        try {
            const formData = new FormData();
            const file = e.target.files?.[0];
            if (file) {
                formData.append('image', file);
                const { data } = await axios.post('/upload', formData);
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
                    <><img src={`http://localhost:4444${img}`} alt="uploading img" /><Button onClick={() => setImg('')} children='Удалить' /></>
                ) : <Button onClick={() => imgRef.current?.click()} children='Загрузить превью' />}

                <input ref={imgRef} onChange={handleCangeFile} type="file" hidden />
            </div>
            <form onSubmit={e => { e.preventDefault() }} className={s.form}>
                <label htmlFor="">
                    {/* <ValidationErorrs array={name.stringErorr} /> */}
                    <input className={s.title} value={title.value} onBlur={e => title.onBlur(e)} onChange={e => title.onChange(e)} type="title" placeholder='Заголовок статьи' />
                </label>
                <label htmlFor="">
                    {/* <ValidationErorrs array={name.stringErorr} /> */}
                    <input value={tags.value} onBlur={e => tags.onBlur(e)} onChange={e => tags.onChange(e)} type="tags" placeholder='#тэги' />
                </label>
                <EditorText />
                <Button children='Отправить' />
            </form>

        </div>

    )
}

export default PostAdd