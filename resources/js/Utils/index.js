import { format, parseISO } from 'date-fns';
import ja from 'date-fns/locale/ja';

const dateToFormat = (date) => {
    const parsedDate = parseISO(date);
    if(!parsedDate) { return ''};
    return format(parsedDate, 'yyyy年M月d日 HH時mm分', { locale: ja });
}

export default dateToFormat;
