import React from 'react'
import style from '../css/why.module.scss'
import Root from './root';

export default function Why() {
    return (
        <Root>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 m-auto">
                        <div className={`${style.boxF} boxF box-animate`}>
                            <h1>Why,<br></br>because why not!</h1>
                        </div>
                    </div>
                </div>
            </div>
        </Root>
    )
}
