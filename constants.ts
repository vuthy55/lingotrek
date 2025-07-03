import type { Language, LanguageCode, Topic } from './types';

export const LANGUAGES: Record<LanguageCode, Language> = {
  ZH: { code: 'ZH', name: 'Chinese', nativeName: '中文', flag: '🇨🇳', speechLang: 'zh-CN' },
  EN: { code: 'EN', name: 'English', nativeName: 'English', flag: '🇺🇸', speechLang: 'en-US' },
  ID: { code: 'ID', name: 'Indonesian', nativeName: 'Bahasa Indonesia', flag: '🇮🇩', speechLang: 'id-ID' },
  KM: { code: 'KM', name: 'Khmer', nativeName: 'ភាសាខ្មែរ', flag: '🇰🇭', speechLang: 'km-KH' },
  LO: { code: 'LO', name: 'Laos', nativeName: 'ພາສາລາວ', flag: '🇱🇦', speechLang: 'lo-LA' },
  MY: { code: 'MY', name: 'Myanmar', nativeName: 'မြန်မာဘာသာ', flag: '🇲🇲', speechLang: 'my-MM' },
  TH: { code: 'TH', name: 'Thai', nativeName: 'ภาษาไทย', flag: '🇹🇭', speechLang: 'th-TH' },
  VI: { code: 'VI', name: 'Vietnamese', nativeName: 'Tiếng Việt', flag: '🇻🇳', speechLang: 'vi-VN' },
  FR: { code: 'FR', name: 'French', nativeName: 'Français', flag: '🇫🇷', speechLang: 'fr-FR' },
  ES: { code: 'ES', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸', speechLang: 'es-ES' },
  TA: { code: 'TA', name: 'Tamil', nativeName: 'தமிழ்', flag: '🇮🇳', speechLang: 'ta-IN' },
  AR: { code: 'AR', name: 'Arabic', nativeName: 'العربية', flag: '🇸🇦', speechLang: 'ar-SA' },
  HI: { code: 'HI', name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳', speechLang: 'hi-IN' },
  IT: { code: 'IT', name: 'Italian', nativeName: 'Italiano', flag: '🇮🇹', speechLang: 'it-IT' },
};

export const VOCABULARY_DATA: Topic[] = [
  {
    topic: 'Greetings',
    words: [
      { EN: 'Hello', ZH: '你好', TH: 'สวัสดี', VI: 'Xin chào', ID: 'Halo', KM: 'សួស្តី', LO: 'ສະບាយດີ', MY: 'မင်္ဂလာပါ', FR: 'Bonjour', ES: 'Hola', TA: '', AR: '', HI: '', IT: '' },
      { EN: 'Goodbye', ZH: '再见', TH: 'လาก่อน', VI: 'Tạm biệt', ID: 'Selamat tinggal', KM: 'លាហើយ', LO: 'ລາກ່ອນ', MY: 'သွားနှင့်ဦးမယ်', FR: 'Au revoir', ES: 'Adiós', TA: '', AR: '', HI: '', IT: '' },
      { EN: 'Thank you', ZH: '谢谢', TH: 'ขอบคุณ', VI: 'Cảm ơn', ID: 'Terima kasih', KM: 'អរគុណ', LO: 'ຂອບໃຈ', MY: 'ကျေးဇူးတင်ပါတယ်', FR: 'Merci', ES: 'Gracias', TA: '', AR: '', HI: '', IT: '' },
      { EN: 'Sorry', ZH: '对不起', TH: 'ขอโทษ', VI: 'Xin lỗi', ID: 'Maaf', KM: 'សុំទោស', LO: 'ຂໍໂທດ', MY: 'တောင်းပန်ပါတယ်', FR: 'Désolé', ES: 'Lo siento', TA: '', AR: '', HI: '', IT: '' },
      { EN: 'Yes', ZH: '是', TH: 'ใช่', VI: 'Vâng', ID: 'Ya', KM: 'បាទ/ចាស', LO: 'ແມ່ນ', MY: 'ဟုတ်ကဲ့', FR: 'Oui', ES: 'Sí', TA: '', AR: '', HI: '', IT: '' },
    ],
  },
  {
    topic: 'Numbers',
    words: [
      { EN: 'One', ZH: '一', TH: 'หนึ่ง', VI: 'Một', ID: 'Satu', KM: 'មួយ', LO: 'ໜຶ່ງ', MY: 'တစ်', FR: 'Un', ES: 'Uno', TA: '', AR: '', HI: '', IT: '' },
      { EN: 'Two', ZH: '二', TH: 'สอง', VI: 'Hai', ID: 'Dua', KM: 'ពីរ', LO: 'ສອງ', MY: 'နှစ်', FR: 'Deux', ES: 'Dos', TA: '', AR: '', HI: '', IT: '' },
      { EN: 'Three', ZH: '三', TH: 'สาม', VI: 'Ba', ID: 'Tiga', KM: 'បី', LO: 'ສາມ', MY: 'သုံး', FR: 'Trois', ES: 'Tres', TA: '', AR: '', HI: '', IT: '' },
      { EN: 'Four', ZH: '四', TH: 'สี่', VI: 'Bốn', ID: 'Empat', KM: 'បួន', LO: 'ສີ່', MY: 'လေး', FR: 'Quatre', ES: 'Cuatro', TA: '', AR: '', HI: '', IT: '' },
      { EN: 'Five', ZH: '五', TH: 'ห้า', VI: 'Năm', ID: 'Lima', KM: 'ប្រាំ', LO: 'ຫ້າ', MY: 'ငါး', FR: 'Cinq', ES: 'Cinco', TA: '', AR: '', HI: '', IT: '' },
      { EN: 'Six', ZH: '六', TH: 'หก', VI: 'Sáu', ID: 'Enam', KM: 'ប្រាំមួយ', LO: 'ຫົກ', MY: 'ခြောက်', FR: 'Six', ES: 'Seis', TA: '', AR: '', HI: '', IT: '' },
      { EN: 'Seven', ZH: '七', TH: 'เจ็ด', VI: 'Bảy', ID: 'Tujuh', KM: 'ប្រាំពីរ', LO: 'ເຈັດ', MY: 'ခုနစ်', FR: 'Sept', ES: 'Siete', TA: '', AR: '', HI: '', IT: '' },
      { EN: 'Eight', ZH: '八', TH: 'แปด', VI: 'Tám', ID: 'Delapan', KM: 'ប្រាំបី', LO: 'ແປດ', MY: 'ရှစ်', FR: 'Huit', ES: 'Ocho', TA: '', AR: '', HI: '', IT: '' },
      { EN: 'Nine', ZH: '九', TH: 'เก้า', VI: 'Chín', ID: 'Sembilan', KM: 'ប្រាំបួន', LO: 'ເກົ້າ', MY: 'ကိုး', FR: 'Neuf', ES: 'Nueve', TA: '', AR: '', HI: '', IT: '' },
      { EN: 'Ten', ZH: '十', TH: 'สิบ', VI: 'Mười', ID: 'Sepuluh', KM: 'ដប់', LO: 'ສິບ', MY: 'ဆယ်', FR: 'Dix', ES: 'Diez', TA: '', AR: '', HI: '', IT: '' },
      { EN: 'Hundred', ZH: '百', TH: 'ร้อย', VI: 'Trăm', ID: 'Seratus', KM: 'រយ', LO: 'ຮ້ອຍ', MY: 'ရာ', FR: 'Cent', ES: 'Cien', TA: '', AR: '', HI: '', IT: '' },
    ],
  },
  {
    topic: 'Directions',
    words: [
        { EN: 'Left', ZH: '左', TH: 'ซ้าย', VI: 'Trái', ID: 'Kiri', KM: 'ឆ្វេង', LO: 'ຊ້າຍ', MY: 'ဘယ်', FR: 'Gauche', ES: 'Izquierda', TA: '', AR: '', HI: '', IT: '' },
        { EN: 'Right', ZH: '右', TH: 'ขวา', VI: 'Phải', ID: 'Kanan', KM: 'ស្ដាំ', LO: 'ຂວາ', MY: 'ညာ', FR: 'Droite', ES: 'Derecha', TA: '', AR: '', HI: '', IT: '' },
        { EN: 'Straight', ZH: '直', TH: 'ตรงไป', VI: 'Đi thẳng', ID: 'Lurus', KM: 'ត្រង់', LO: 'ຊື່', MY: 'တည့်တည့်', FR: 'Tout droit', ES: 'Derecho', TA: '', AR: '', HI: '', IT: '' },
    ]
  },
  {
    topic: 'Food',
    words: [
        { EN: 'Water', ZH: '水', TH: 'น้ำ', VI: 'Nước', ID: 'Air', KM: 'ទឹក', LO: 'ນໍ້າ', MY: 'ရေ', FR: 'Eau', ES: 'Agua', TA: '', AR: '', HI: '', IT: '' },
        { EN: 'Rice', ZH: '米饭', TH: 'ข้าว', VI: 'Cơm', ID: 'Nasi', KM: 'បាយ', LO: 'ເຂົ້າ', MY: 'ထမင်း', FR: 'Riz', ES: 'Arroz', TA: '', AR: '', HI: '', IT: '' },
        { EN: 'Noodles', ZH: '面条', TH: 'ก๋วยเตี๋ยว', VI: 'Phở', ID: 'Mie', KM: 'មី', LO: 'ເຂົ້າປຽກ', MY: 'ခေါက်ဆွဲ', FR: 'Nouilles', ES: 'Fideos', TA: '', AR: '', HI: '', IT: '' },
    ]
  },
    {
    topic: 'Transportation',
    words: [
        { EN: 'Bus', ZH: '公共汽车', TH: 'รถบัส', VI: 'Xe buýt', ID: 'Bis', KM: 'ឡានក្រុង', LO: 'ລົດເມ', MY: 'ဘတ်စ်ကား', FR: 'Bus', ES: 'Autobús', TA: '', AR: '', HI: '', IT: '' },
        { EN: 'Train', ZH: '火车', TH: 'รถไฟ', VI: 'Tàu hỏa', ID: 'Kereta', KM: 'រថភ្លើង', LO: 'ລົດໄຟ', MY: 'ရထား', FR: 'Train', ES: 'Tren', TA: '', AR: '', HI: '', IT: '' },
        { EN: 'Airplane', ZH: '飞机', TH: 'เครื่องบิน', VI: 'Máy bay', ID: 'Pesawat', KM: 'យន្តហោះ', LO: 'ຍົນ', MY: 'လေယာဉ်ပျံ', FR: 'Avion', ES: 'Avión', TA: '', AR: '', HI: '', IT: '' },
    ]
  },
  {
    topic: 'Currency',
    words: [
        { EN: 'Money', ZH: '钱', TH: 'เงิน', VI: 'Tiền', ID: 'Uang', KM: 'លុយ', LO: 'ເງິນ', MY: 'ပိုက်ဆံ', FR: 'Argent', ES: 'Dinero', TA: '', AR: '', HI: '', IT: '' },
        { EN: 'Baht', ZH: '泰铢', TH: 'บาท', VI: 'Bạt Thái', ID: 'Baht', KM: 'បាត', LO: 'ບາດ', MY: 'ဘတ်', FR: 'Baht', ES: 'Baht', TA: '', AR: '', HI: '', IT: '' },
        { EN: 'Riel', ZH: '瑞尔', TH: 'เรียล', VI: 'Riel', ID: 'Riel', KM: 'រៀល', LO: 'ລຽລ', MY: 'ရီး', FR: 'Riel', ES: 'Riel', TA: '', AR: '', HI: '', IT: '' },
    ]
  }
];

export const ADMIN_EMAIL = 'thegreenhomecommunity@gmail.com';
