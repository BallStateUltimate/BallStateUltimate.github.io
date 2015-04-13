function GalleryController($http,$scope,$route, $location){
    $scope.photoGallery = [{
        title: "Evansville",
        image: "images/tournaments/Conference16.jpg",
        caption: ""
    }, {
        title: "Evansville",
        image: "images/tournaments/Conference17.jpg",
        caption: ""
    }, {
        title: "Evansville",
        image: "images/tournaments/Conference1.jpg",
        caption: ""
    }, {
        title: "Evansville",
        image: "images/tournaments/Conference2.jpg",
        caption: ""
    }, {
        title: "Evansville",
        image: "images/tournaments/Conference3.jpg",
        caption: ""
    }, {
        title: "Evansville",
        image: "images/tournaments/Conference4.jpg",
        caption: ""
    }, {
        title: "Evansville",
        image: "images/tournaments/Conference5.jpg",
        caption: ""
    }, {
        title: "Evansville",
        image: "images/tournaments/Conference6.jpg",
        caption: ""
    }, {
        title: "Evansville",
        image: "images/tournaments/Conference7.jpg",
        caption: ""
    }, {
        title: "Evansville",
        image: "images/tournaments/Conference8.jpg",
        caption: ""
    }, {
        title: "Evansville",
        image: "images/tournaments/Conference9.jpg",
        caption: ""
    }, {
        title: "Evansville",
        image: "images/tournaments/Conference10.jpg",
        caption: ""
    }, {
        title: "Evansville",
        image: "images/tournaments/Conference11.jpg",
        caption: ""
    }, {
        title: "Evansville",
        image: "images/tournaments/Conference12.jpg",
        caption: ""
    }, {
        title: "Evansville",
        image: "images/tournaments/Conference12_2.jpg",
        caption: ""
    }, {
        title: "Evansville",
        image: "images/tournaments/Conference13.jpg",
        caption: ""
    }, {
        title: "Evansville",
        image: "images/tournaments/Conference14.jpg",
        caption: ""
    }, {
        title: "Evansville",
        image: "images/tournaments/Conference15.jpg",
        caption: ""
    }, {
        title: "McAllister's in Nashville",
        image: "images/tournaments/MusicCity1.jpg",
        caption: "Team Selfie @ McAllister's in Nashville"
    }, {
        title: "Decatur Post-Victory",
        image: "images/tournaments/Decatur1.jpg",
        caption: "Decatur Post-Victory Chinese Buffet"
    },{
        title: "Poultry Days 2014",
        image: "images/tournaments/PDays2.jpg",
        caption: "Poultry Days 2014 Champs, Cock-Wringers"
    }];
    
    var currentIndex = 0;
    
    $scope.loadImage = function(index){
        currentIndex = index;
        $scope.selectedImageURL = $scope.photoGallery[currentIndex].image;
        $scope.showPopup = true;
    }
    
    $scope.closePopup = function(){
        $scope.showPopup = false;
    }
    
    $scope.next = function(){
        currentIndex+=1;
        if (currentIndex > $scope.photoGallery.length - 1){
            currentIndex = 0;
        }
        $scope.selectedImageURL = $scope.photoGallery[currentIndex].image;
    }
    
    $scope.previous = function(){
        currentIndex-=1;
        if (currentIndex < 0){
            currentIndex = $scope.photoGallery.length - 1;
        }
        $scope.selectedImageURL = $scope.photoGallery[currentIndex].image;
    }
}