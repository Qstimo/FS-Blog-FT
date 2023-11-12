import React from 'react'
import s from './slider.module.scss'
import MicroPost from '../Post/microPost'
import { useAppDispatch } from '../../Slice/store'
import { fetchLastPopulatePosts, selectPostData } from '../../Slice/slices/post/postSlice'
import { useSelector } from 'react-redux'
import { LeftArrow, RightArrow } from '../../Img/svg'
import MySlider from './slider'

const Slider: React.FC = () => {
    const dispatch = useAppDispatch();
    const { latsPopulatePost } = useSelector(selectPostData);

    const isLoadingBar = latsPopulatePost.status === 'loading';

    React.useEffect(() => {
        dispatch(fetchLastPopulatePosts())
    }, []);

    return (
        <div className={s.root}>
            <h3>Лучшие публикации:</h3>
            <hr />
            <MySlider slides={isLoadingBar ? [...new Array(6)].map((e, i) => < MicroPost key={i} isLoading={true} />) : latsPopulatePost.items.map(item => < MicroPost post={item} key={item._id} />)} />
        </div>
    )
}

export default Slider