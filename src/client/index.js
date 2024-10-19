import { handleSubmit, onBlur } from './js/formHandler'
import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

document.querySelector('form').addEventListener('submit', handleSubmit);
document.getElementById('name').addEventListener('blur', onBlur);