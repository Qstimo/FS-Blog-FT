import React from 'react'
import './notFound.scss'
import { Link } from 'react-router-dom'
import Button, { ButtonTheme } from '../../Ui/Button'


const NotFound: React.FC = () => {
    return (
        <div className='notFound__container'><div>
            <svg className="paper" viewBox="0 0 300 300" width="300px" height="300px" role="img" aria-label="A piece of paper torn in half">
                <g className="paper__outline" fill="none" stroke="hsl(0,10%,10%)" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" transform="translate(61,4)">
                    <g className="paper__top" transform="translate(0,25)">
                        <polygon className="paper__shadow" fill="hsl(0,10%,70%)" stroke="none" points="0 148,0 0,137 0,187 50,187 148,155 138,124 148,93 138,62 148,31 138" transform="translate(-12,12)" />
                        <rect className="paper__tear-fill" fill="hsl(0,0%,100%)" stroke="none" x="0" y="137" width="0" height="23px" />
                        <polygon className="paper__fill" fill="hsl(0,0%,100%)" stroke="none" points="0 148,0 0,137 0,187 50,187 148,155 138,124 148,93 138,62 148,31 138" />
                        <polygon className="paper__shadow" fill="hsl(0,10%,70%)" stroke="none" points="137 0,132 55,187 50,142 45" />
                        <polyline points="137 0,142 45,187 50" />
                        <polyline points="0 148,0 0,137 0,187 50,187 148" />
                        <g className="paper__lines" stroke="hsl(0,10%,70%)">
                            <polyline points="22 88,165 88" />
                            <polyline points="22 110,165 110" />
                            <polyline points="22 132,165 132" />
                        </g>
                        <polyline className="paper__tear" points="0 148,31 138,62 148,93 138,124 148,155 138,187 148" stroke-dasharray="198 198" stroke-dashoffset="-198" />
                    </g>
                    <g className="paper__bottom" transform="translate(0,25)">
                        <polygon className="paper__shadow" fill="hsl(0,10%,70%)" stroke="none" points="0 148,31 138,62 148,93 138,124 148,155 138,187 148,187 242,0 242" transform="translate(-12,12)" />
                        <polygon className="paper__fill" fill="hsl(0,0%,100%)" stroke="none" points="0 148,31 140,62 148,93 138,124 148,155 138,187 148,187 242,0 242" />
                        <polyline points="187 148,187 242,0 242,0 148" />
                        <g className="paper__lines" stroke="hsl(0,10%,70%)">
                            <polyline points="22 154,165 154" />
                            <polyline points="22 176,165 176" />
                            <polyline points="22 198,94 198" />
                        </g>
                        <polyline className="paper__tear" points="0 148,31 138,62 148,93 138,124 148,155 138,187 148" stroke-dasharray="198 198" stroke-dashoffset="-198" />
                    </g>
                </g>
            </svg>
        </div>
            <div>
                <h1>404</h1>
                <p>Мы не смогли найти страницу, которую вы искали. <br /> Возможно, её не существует.</p>
                <Link to={'/'}><Button theme={ButtonTheme.OUTLINE} children='На главную' /></Link>
            </div></div>
    )
}

export default NotFound