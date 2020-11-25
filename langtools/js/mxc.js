$(document).on('change','.uploadInput' , function(){
    var thesEl = $(this)
    setTimeout(function () {
        console.log("hi")
        var fullPath = document.getElementById('uploadInput').value;
        if (fullPath) {
            var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
            var filename = fullPath.substring(startIndex);
            if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                filename = filename.substring(1);
            }
            $(".imgUploadTtl span").text(filename);
            if(thesEl.hasClass("hasDescr")){
                console.log(document.getElementById('uploadInput').files[0].type)
                $(".uplName").text(filename)
                $(".ulpSize").text((document.getElementById('uploadInput').files[0].size / 1000) + 'KB')
                $(".uplType").text(document.getElementById('uploadInput').files[0].type);
                $(".uploadStatContainer").css('display','flex');
            }
        }


       $(".imgUploadTtlOuter").css("width",$(".imgUploadTtlOuterHeight").width() + "px");
        $(".imgUploadTtlOuter").addClass("open");

    },300);

});

$(".closeImgUpload").click(function () {
    $(".imgUploadTtlOuter").css("width",0 + "px");
    $(".imgUploadTtlOuter").removeClass("open");
    setTimeout(function () {
        $(".imgUploadTtl span").text(filename);
    },500)

});
$(".ocrInnerBtn").click(function () {
    if (!$(this).hasClass("active")) {
        $(".ocrInnerBtn").removeClass("active");
        $(this).addClass("active");
        if($(this).attr("data-index") == '0'){
            $(".ocrInnerItem").removeClass("active");
            $(".imgUploadItem").addClass("active");
        }
        if($(this).attr("data-index") == '1'){
            $(".ocrInnerItem").removeClass("active");
            $(".txtAreaItem").addClass("active");
        };

    }
});
