/**
 * Created by kang on 2015/10/26.
 */
;
(function () {

    // test
    $('.gotoStep').click(function () {
        var targetStep = $(this).attr('data-step');
        gotoStep(targetStep);
    });

    if (getStep() != -1) {
        gotoStep(getStep());
    }

    // gotoTargetStep
    function gotoStep(targetStep) {
        $('.character').removeClass('step0 step1 step2 step3 step4 step5').addClass('step' + targetStep);
    }

    // ҳ�����ʱ, ��url�ϻ�ȡpacmanҪ�ƶ���Ŀ�경��
    function getStep() {
        var strParamName = 'step';
        var strSearch = location.search.substring(1);
        if (strSearch.indexOf(strParamName + '=') != -1) {
            return strSearch.split(strParamName + '=')[1].split('&')[0]
        } else {
            return -1;
        }
    }

})();