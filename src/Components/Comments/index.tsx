import React from 'react'
import s from './comments.module.scss'

const Comment: React.FC = () => {
    return (

        <div className={s.comments}>
            <div className={s.comment}>
                <div className={s.avatar}><img src='' alt="" /></div>
                <div className={s.commentBody}> <span>Vasiliy Pupkin</span> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error possimus tenetur quaerat officiis vel, voluptate itaque. Asperiores maxime eaque inventore voluptatem totam quidem ut amet architecto. Adipisci temporibus sapiente voluptates!</p></div>

            </div>
        </div>


    )
}

export default Comment