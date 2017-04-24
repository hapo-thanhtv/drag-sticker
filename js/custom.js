jQuery(document).ready(function() {
    if (jQuery('.hp-drag-sticker').length) {

        new ElastiStack(document.getElementById('hp-drag-sticker'), {

            distDragBack: 200,
            distDragMax: 200,

        });
    }
});
