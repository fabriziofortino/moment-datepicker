// moment.js language configuration
// language : spanish (es)
// author : Julio Napur� : https://github.com/julionc
(function () {
    var lang = {
        months: "Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre".split("_"),
        monthsShort: "Ene._Feb._Mar._Abr._May._Jun._Jul._Ago._Sep._Oct._Nov._Dic.".split("_"),
        weekdays: "Domingo_Lunes_Martes_Mi�rcoles_Jueves_Viernes_S�bado".split("_"),
        weekdaysShort: "Dom._Lun._Mar._Mi�._Jue._Vie._S�b.".split("_"),
        weekdaysMin: "Do_Lu_Ma_Mi_Ju_Vi_S�".split("_"),
        longDateFormat: {
            LT: "H:mm",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY LT",
            LLLL: "dddd D MMMM YYYY LT"
        },
        calendar: {
            sameDay: function () {
                return '[hoy a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            nextDay: function () {
                return '[ma�ana a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            nextWeek: function () {
                return 'dddd [a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            lastDay: function () {
                return '[ayer a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            lastWeek: function () {
                return '[el] dddd [pasado a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            sameElse: 'L'
        },
        relativeTime: {
            future: "en %s",
            past: "hace %s",
            s: "unos segundos",
            m: "un minuto",
            mm: "%d minutos",
            h: "una hora",
            hh: "%d horas",
            d: "un d�a",
            dd: "%d d�as",
            M: "un mes",
            MM: "%d meses",
            y: "un a�o",
            yy: "%d a�os"
        },
        ordinal: function (number) {
            return '�';
        }
    };

    // Node
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = lang;
    }
    // Browser
    if (typeof window !== 'undefined' && this.moment && this.moment.lang) {
        this.moment.lang('es', lang);
    }
    moment.lang('es');
}());