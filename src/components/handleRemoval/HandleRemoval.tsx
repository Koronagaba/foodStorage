import { useTranslation } from "react-i18next"
import './HandleRemoval.css'

const HandleRemoval = () => {
    const { t } = useTranslation()
  return (
    <div className="handle-removal">
        <button>{t('delete_everything')}</button>
    </div>
  )
}

export default HandleRemoval