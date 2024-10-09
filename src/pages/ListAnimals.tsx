import { useContext, useEffect, useRef, useState } from 'react';
import { CardComponent } from '../components/card/CardComponent';
import { FooterMovil } from './FooterMovil';
import { HeaderMovil } from './HeaderMovil';

const ListAnimals = () => {
    return (
        <div>

            <HeaderMovil />
            <div className='container mt-4'>
                <div className='row'>
                    <div className='col-md-12 col-sm-12 col-12'>
                        <CardComponent
                            title='Animal Rescatado'
                            descripcion=' The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.'
                            image='https://cdn.pixabay.com/photo/2023/08/18/15/02/dog-8198719_1280.jpg'
                        />
                        <CardComponent
                            title='Animal Rescatado'
                            descripcion=' The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.'
                            image='https://cdn.pixabay.com/photo/2023/08/18/15/02/dog-8198719_1280.jpg'
                        />
                        <CardComponent
                            title='Animal Rescatado'
                            descripcion=' The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.'
                            image='https://cdn.pixabay.com/photo/2023/08/18/15/02/dog-8198719_1280.jpg'
                        />
                        <CardComponent
                            title='Animal Rescatado'
                            descripcion=' The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.'
                            image='https://cdn.pixabay.com/photo/2022/08/17/15/46/labrador-7392840_1280.jpg'
                        />
                        <CardComponent
                            title='Animal Rescatado'
                            descripcion=' The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.'
                            image='https://cdn.pixabay.com/photo/2023/08/18/15/02/dog-8198719_1280.jpg'
                        />
                        <CardComponent
                            title='Animal Rescatado'
                            descripcion=' The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.'
                            image='https://cdn.pixabay.com/photo/2023/08/18/15/02/dog-8198719_1280.jpg'
                        />
                        <CardComponent
                            title='Animal Rescatado'
                            descripcion=' The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.'
                            image='https://cdn.pixabay.com/photo/2023/08/18/15/02/dog-8198719_1280.jpg'
                        />
                    </div>
                </div>
            </div>
            <FooterMovil />
        </div>
    );
}

export {
    ListAnimals
};