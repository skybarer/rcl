// App.js
import React from 'react';
import WordCloudComponent from './WordCloudComponent';

const words = [
  { text: 'told', value: 64, color: '#ff7f0e' },
  { text: 'mistake', value: 11, color: '#1f77b4' },
  { text: 'thought', value: 16, color: '#8c564b' },
  { text: 'bad', value: 17, color: '#17becf' },
  { text: 'correct', value: 10, color: '#2ca02c' },
  { text: 'day', value: 54, color: '#d62728' },
  { text: 'prescription', value: 12, color: '#9467bd' },
  { text: 'time', value: 77, color: '#e377c2' },
  { text: 'thing', value: 45, color: '#7f7f7f' },
  { text: 'left', value: 19, color: '#ff7f0e' },
  { text: 'pay', value: 13, color: '#1f77b4' },
  { text: 'people', value: 32, color: '#8c564b' },
  { text: 'month', value: 22, color: '#17becf' },
  { text: 'again', value: 35, color: '#2ca02c' },
  { text: 'review', value: 24, color: '#d62728' },
  { text: 'call', value: 38, color: '#9467bd' },
  { text: 'doctor', value: 70, color: '#e377c2' },
  { text: 'asked', value: 26, color: '#7f7f7f' },
  { text: 'finally', value: 14, color: '#ff7f0e' },
  { text: 'insurance', value: 29, color: '#1f77b4' },
  { text: 'week', value: 41, color: '#8c564b' },
  { text: 'called', value: 49, color: '#17becf' },
  { text: 'problem', value: 20, color: '#2ca02c' },
  { text: 'going', value: 59, color: '#d62728' },
  { text: 'help', value: 49, color: '#9467bd' },
  { text: 'felt', value: 45, color: '#e377c2' },
  { text: 'discomfort', value: 11, color: '#7f7f7f' },
  { text: 'lower', value: 22, color: '#ff7f0e' },
  { text: 'severe', value: 12, color: '#1f77b4' },
  { text: 'free', value: 38, color: '#8c564b' },
  { text: 'better', value: 54, color: '#17becf' },
  { text: 'muscle', value: 14, color: '#2ca02c' },
  { text: 'neck', value: 41, color: '#d62728' },
  { text: 'root', value: 24, color: '#9467bd' },
  { text: 'adjustment', value: 16, color: '#e377c2' },
  { text: 'therapy', value: 29, color: '#7f7f7f' },
  { text: 'injury', value: 20, color: '#ff7f0e' },
  { text: 'excruciating', value: 10, color: '#1f77b4' },
  { text: 'chronic', value: 13, color: '#8c564b' },
  { text: 'chiropractor', value: 35, color: '#17becf' },
  { text: 'treatment', value: 59, color: '#2ca02c' },
  { text: 'tooth', value: 32, color: '#d62728' },
  { text: 'chiropractic', value: 17, color: '#9467bd' },
  { text: 'dr', value: 77, color: '#e377c2' },
  { text: 'relief', value: 19, color: '#7f7f7f' },
  { text: 'shoulder', value: 26, color: '#ff7f0e' },
  { text: 'nurse', value: 17, color: '#1f77b4' },
  { text: 'room', value: 22, color: '#8c564b' },
  { text: 'hour', value: 35, color: '#17becf' },
  { text: 'wait', value: 38, color: '#2ca02c' },
  { text: 'hospital', value: 11, color: '#d62728' },
  { text: 'eye', value: 13, color: '#9467bd' },
  { text: 'test', value: 10, color: '#e377c2' },
  { text: 'appointment', value: 49, color: '#7f7f7f' },
  { text: 'medical', value: 19, color: '#ff7f0e' },
  { text: 'question', value: 20, color: '#1f77b4' },
  { text: 'office', value: 64, color: '#8c564b' },
  { text: 'care', value: 54, color: '#17becf' },
  { text: 'minute', value: 29, color: '#2ca02c' },
  { text: 'waiting', value: 16, color: '#d62728' },
  { text: 'patient', value: 59, color: '#9467bd' },
  { text: 'health', value: 49, color: '#e377c2' },
  { text: 'alternative', value: 24, color: '#7f7f7f' },
  { text: 'holistic', value: 19, color: '#ff7f0e' },
  { text: 'traditional', value: 20, color: '#1f77b4' },
  { text: 'symptom', value: 29, color: '#8c564b' },
  { text: 'internal', value: 17, color: '#17becf' },
  { text: 'prescribed', value: 26, color: '#2ca02c' },
  { text: 'acupuncturist', value: 16, color: '#d62728' },
  { text: 'pain', value: 64, color: '#9467bd' },
  { text: 'integrative', value: 10, color: '#e377c2' },
  { text: 'herb', value: 13, color: '#7f7f7f' },
  { text: 'sport', value: 22, color: '#ff7f0e' },
  { text: 'physician', value: 41, color: '#1f77b4' },
  { text: 'herbal', value: 11, color: '#8c564b' },
  { text: 'eastern', value: 12, color: '#17becf' },
  { text: 'chinese', value: 32, color: '#2ca02c' },
  { text: 'acupuncture', value: 45, color: '#d62728' },
  { text: 'prescribe', value: 14, color: '#9467bd' },
  { text: 'medication', value: 38, color: '#e377c2' },
  { text: 'western', value: 35, color: '#7f7f7f' },
  { text: 'sure', value: 38, color: '#ff7f0e' },
  { text: 'work', value: 64, color: '#1f77b4' },
  { text: 'smile', value: 17, color: '#8c564b' },
  { text: 'teeth', value: 26, color: '#17becf' },
  { text: 'pair', value: 11, color: '#2ca02c' },
  { text: 'wanted', value: 20, color: '#d62728' },
  { text: 'frame', value: 13, color: '#9467bd' },
  { text: 'lasik', value: 10, color: '#e377c2' },
  { text: 'amazing', value: 41, color: '#7f7f7f' },
  { text: 'fit', value: 14, color: '#ff7f0e' },
  { text: 'happy', value: 22, color: '#1f77b4' },
  { text: 'feel', value: 49, color: '#8c564b' },
  { text: 'glasse', value: 19, color: '#17becf' },
  { text: 'vision', value: 12, color: '#2ca02c' },
  { text: 'pressure', value: 16, color: '#d62728' },
  { text: 'find', value: 29, color: '#9467bd' },
  { text: 'experience', value: 59, color: '#e377c2' },
  { text: 'year', value: 70, color: '#7f7f7f' },
  { text: 'massage', value: 35, color: '#ff7f0e' },
  { text: 'best', value: 54, color: '#1f77b4' },
  { text: 'mouth', value: 20, color: '#8c564b' },
  { text: 'staff', value: 64, color: '#17becf' },
  { text: 'gum', value: 10, color: '#2ca02c' },
  { text: 'chair', value: 12, color: '#d62728' },
  { text: 'ray', value: 22, color: '#9467bd' },
  { text: 'dentistry', value: 11, color: '#e377c2' },
  { text: 'canal', value: 13, color: '#7f7f7f' },
  { text: 'procedure', value: 32, color: '#ff7f0e' },
  { text: 'filling', value: 26, color: '#1f77b4' },
  { text: 'gentle', value: 19, color: '#8c564b' },
  { text: 'cavity', value: 17, color: '#17becf' },
  { text: 'crown', value: 14, color: '#2ca02c' },
  { text: 'cleaning', value: 38, color: '#d62728' },
  { text: 'hygienist', value: 24, color: '#9467bd' },
  { text: 'dental', value: 59, color: '#e377c2' },
  { text: 'charge', value: 24, color: '#7f7f7f' },
  { text: 'cost', value: 29, color: '#ff7f0e' },
  { text: 'charged', value: 13, color: '#1f77b4' },
  { text: 'spent', value: 17, color: '#8c564b' },
  { text: 'paying', value: 14, color: '#17becf' },
  { text: 'pocket', value: 12, color: '#2ca02c' },
  { text: 'dollar', value: 11, color: '#d62728' },
  { text: 'business', value: 32, color: '#9467bd' },
  { text: 'refund', value: 10, color: '#e377c2' },
];

export default {
  title: 'WordCloudComponent',
  component: WordCloudComponent,
};

export const Default = () => <WordCloudComponent words={words} />;
