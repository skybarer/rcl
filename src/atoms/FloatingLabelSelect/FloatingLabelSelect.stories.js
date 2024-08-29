// src/components/FloatingLabelSelect.stories.js
import React, { useState } from 'react';
import FloatingLabelSelect from './FloatingLabelSelect';

export default {
    title: 'Form/FloatingLabelSelect',
    component: FloatingLabelSelect,
};

const Template = (args) => {
    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (e) => {
        setSelectedValue(e.target.value);
    };

    return <FloatingLabelSelect {...args} value={selectedValue} onChange={handleChange} />;
};

export const Default = Template.bind({});
Default.args = {
    label: 'Preffered Language',
    options: [
        { value: 'zh', label: '中文 (简体)' },
        { value: 'zh-TW', label: '中文 (繁體)' },
        { value: 'en', label: 'English' },
        { value: 'fr', label: 'Français' },
        { value: 'de', label: 'Deutsch' },
        { value: 'it', label: 'Italiano' },
        { value: 'ja', label: '日本語' },
        { value: 'ko', label: '한국어' },
        { value: 'pt', label: 'Português' },
        { value: 'ru', label: 'Русский' },
        { value: 'es', label: 'Español' },
        { value: 'ar', label: 'العربية' },
        { value: 'ca', label: 'Català' },
        { value: 'hr', label: 'Hrvatski' },
        { value: 'cs', label: 'Čeština' },
        { value: 'da', label: 'Dansk' },
        { value: 'nl', label: 'Nederlands' },
        { value: 'fi', label: 'Suomi' },
        { value: 'el', label: 'Ελληνικά' },
        { value: 'he', label: 'עברית' },
        { value: 'hi', label: 'हिन्दी' },
        { value: 'hu', label: 'Magyar' },
        { value: 'is', label: 'Íslenska' },
        { value: 'id', label: 'Bahasa Indonesia' },
        { value: 'ms', label: 'Melayu' },
        { value: 'no', label: 'Norsk' },
        { value: 'pl', label: 'Polski' },
        { value: 'sv', label: 'Svenska' },
        { value: 'th', label: 'ภาษาไทย' },
        { value: 'tr', label: 'Türkçe' },
        { value: 'af', label: 'Afrikaans' },
        { value: 'sq', label: 'Shqip' },
        { value: 'hy', label: 'Հայերեն' },
        { value: 'az', label: 'azərbaycan dili' },
        { value: 'eu', label: 'euskara' },
        { value: 'be', label: 'беларуская мова' },
        { value: 'bn', label: 'বাংলা' },
        { value: 'bs', label: 'Bosanski' },
        { value: 'bg', label: 'български език' },
        { value: 'my', label: 'ဗမာစာ' },
        { value: 'et', label: 'eesti' },
        { value: 'fil', label: 'Filipino' },
        { value: 'gl', label: 'Galego' },
        { value: 'ka', label: 'ქართული' },
        { value: 'gu', label: 'Gujarati' },
        { value: 'ht', label: 'Kreyòl ayisyen' },
        { value: 'ga', label: 'Gaeilge' },
        { value: 'kn', label: 'ಕನ್ನಡ' },
        { value: 'km', label: 'ភាសាខ្មែរ' },
        { value: 'ky', label: 'кыргызча' },
        { value: 'lo', label: 'Lao' },
        { value: 'lv', label: 'Latviešu Valoda' },
        { value: 'lt', label: 'lietuvių kalba' },
        { value: 'mr', label: 'मराठी' },
        { value: 'mk', label: 'македонски јазик' },
        { value: 'mt', label: 'Malti' },
        { value: 'fa', label: 'فارسی' },
        { value: 'pa', label: 'ਪੰਜਾਬੀ' },
        { value: 'ro', label: 'Română' },
        { value: 'sr', label: 'српски језик' },
        { value: 'sk', label: 'Slovenčina' },
        { value: 'sl', label: 'Slovenščina' },
        { value: 'sw', label: 'Kiswahili' },
        { value: 'tl', label: 'Tagalog' },
        { value: 'ta', label: 'தமிழ்' },
        { value: 'te', label: 'తెలుగు' },
        { value: 'uk', label: 'Українська' },
        { value: 'ur', label: 'اردو' },
        { value: 'vi', label: 'Tiếng Việt' },
        { value: 'xh', label: 'isiXhosa' },
        { value: 'zu', label: 'isiZulu' },
        { value: 'xxkey', label: 'Key Exchange' },
        { value: 'xxlong', label: 'Loooong' },
        { value: 'xxrtl', label: 'RTL אאאא' },
        { value: 'xx', label: 'XXXXXXX' },
        { value: 'sgn', label: 'Sign Language' }
    ]

};
