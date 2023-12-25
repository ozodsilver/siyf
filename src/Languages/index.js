import { createI18n } from 'vue-i18n'

import ru from '../Languages/ru.json'
import uz from '../Languages/uz.json'
import en from '../Languages/en.json'

const languages = {
  en,
  ru,
  uz
}

const i18n = createI18n({
  legacy: false,
  locale: 'uz',
  fallbackLocale: 'uz',
  messages: languages
})

export default i18n;