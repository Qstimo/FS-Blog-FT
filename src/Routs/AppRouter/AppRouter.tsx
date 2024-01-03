import React, { Suspense } from 'react'
import { routeConfig } from './routeConfig'
import { Route, Routes } from 'react-router-dom'
import { Loading } from '../../Img/svg'
import MainLayout from '../../Components/Layouts/MainLayout'
import FirstPage from '../../Pages/FirstPage'

const AppRouter = () => (
    <Routes>
        <Route path='/welcome' element={<FirstPage />} />
        <Route path='/' element={<MainLayout />}>
            {Object.values(routeConfig).map(({ element, path }) => (
                <Route
                    key={path}
                    path={path}
                    element={(
                        <Suspense fallback={<Loading />}>
                            {element}
                        </Suspense>
                    )}
                />
            ))
            }
        </Route>
    </Routes>
)



export default AppRouter