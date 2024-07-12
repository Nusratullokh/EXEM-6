import { useTranslation } from 'react-i18next'
import i18n from '../../locales/i18next'
import { Outlet } from 'react-router-dom'

const Nav = () => {

    const data = useTranslation();
  return (
    <div>
        <select defaultValue={data.i18n.language} onChange={(e) => {
           i18n.changeLanguage(e.target.value)
        }}>
            <option value="uz">UZBEK</option>
            <option value="ru">RUSSIAN</option>
            <option value="en">ENGLISH</option>
            <option value="es">ESPANIOL</option>
        </select>
        <Outlet/>
    </div>
  )
}

export default Nav