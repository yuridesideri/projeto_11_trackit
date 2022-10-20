import dayjs from "dayjs";
import 'dayjs/locale/pt-br';
import 'dayjs/locale/en';
import updateLocale from "dayjs/plugin/updateLocale";
import localeData from 'dayjs/plugin/localeData';

dayjs.extend(updateLocale);
dayjs.extend(localeData);


dayjs.updateLocale('pt-br',{
    weekdaysShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
    weekdays: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
})
dayjs.locale('pt-br');

export default dayjs