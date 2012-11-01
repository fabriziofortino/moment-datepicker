///<reference path='jquery.d.ts' />
interface Window extends ViewCSS, MSEventAttachmentTarget, MSWindowExtensions, WindowPerformance, ScreenView, EventTarget, WindowLocalStorage, WindowSessionStorage, WindowTimers {
    prettyPrint: () => void;
}

$(function(){
    window.prettyPrint && window.prettyPrint();
});