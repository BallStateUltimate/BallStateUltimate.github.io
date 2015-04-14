function GalleryController($http,$scope,$route, $location){
    $scope.photoGallery = [{
        title: "Evansville",
        image: "images/tournaments/Conference16.jpg",
        caption: "Team Photo!"
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
    },{
        title: "Evansville",
        image: "images/tournaments/Conference18.jpg",
        caption: ""
    },{
        title: "Evansville",
        image: "images/tournaments/Conference19.jpg",
        caption: ""
    },{
        title: "Evansville",
        image: "images/tournaments/Conference20.jpg",
        caption: ""
    },{
        title: "Evansville",
        image: "images/tournaments/Conference21.jpg",
        caption: ""
    },{
        title: "Evansville",
        image: "images/tournaments/Conference22.jpg",
        caption: ""
    },{
        title: "Evansville",
        image: "images/tournaments/Conference23.jpg",
        caption: ""
    },{
        title: "Evansville",
        image: "images/tournaments/Conference24.jpg",
        caption: ""
    },{
        title: "Evansville",
        image: "images/tournaments/Conference25.jpg",
        caption: ""
    },{
        title: "Evansville",
        image: "images/tournaments/Conference26.jpg",
        caption: ""
    },{
        title: "Evansville",
        image: "images/tournaments/Conference27.jpg",
        caption: ""
    },{
        title: "Evansville",
        image: "images/tournaments/Conference1.jpg",
        caption: ""
    },{
        title: "Evansville",
        image: "images/tournaments/Conference28.jpg",
        caption: ""
    },{
        title: "Evansville",
        image: "images/tournaments/Conference29.jpg",
        caption: ""
    },{
        title: "Evansville",
        image: "images/tournaments/Conference30.jpg",
        caption: ""
    },{
        title: "Evansville",
        image: "images/tournaments/Conference1.jpg",
        caption: ""
    },{
        title: "Evansville",
        image: "images/tournaments/Conference31.jpg",
        caption: ""
    },{
        title: "Evansville",
        image: "images/tournaments/Conference32.jpg",
        caption: ""
    },{
        title: "Evansville",
        image: "images/tournaments/Conference33.jpg",
        caption: ""
    },{
        title: "Evansville",
        image: "images/tournaments/Conference34.jpg",
        caption: ""
    },{
        title: "Evansville",
        image: "images/tournaments/Conference35.jpg",
        caption: ""
    },{
        title: "Evansville",
        image: "images/tournaments/Conference36.jpg",
        caption: ""
    },{
        title: "Evansville",
        image: "images/tournaments/Conference37.jpg",
        caption: ""
    },{
        title: "Evansville",
        image: "images/tournaments/Conference38.jpg",
        caption: ""
    },{
        title: "Evansville",
        image: "images/tournaments/Conference39.jpg",
        caption: ""
    },{
        title: "Evansville",
        image: "images/tournaments/Conference40.jpg",
        caption: ""
    },{
        title: "Evansville",
        image: "images/tournaments/Conference41.jpg",
        caption: ""
    },{
        title: "Evansville",
        image: "images/tournaments/Conference42.jpg",
        caption: ""
    },{
        title: "Evansville",
        image: "images/tournaments/Conference43.jpg",
        caption: ""
    },{
        title: "Evansville",
        image: "images/tournaments/Conference44.jpg",
        caption: ""
    },{
        title: "Evansville",
        image: "images/tournaments/Conference45.jpg",
        caption: ""
    },{
        title: "Evansville",
        image: "images/tournaments/Conference46.jpg",
        caption: ""
    },{
        title: "Evansville",
        image: "images/tournaments/Conference47.jpg",
        caption: ""
    },{
        title: "Evansville",
        image: "images/tournaments/Conference48.jpg",
        caption: ""
    },{
        title: "Evansville",
        image: "images/tournaments/Conference49.jpg",
        caption: ""
    },{
        title: "Evansville",
        image: "images/tournaments/Conference50.jpg",
        caption: ""
    },{
        title: "Evansville",
        image: "images/tournaments/Conference51.jpg",
        caption: ""
    },{
        title: "Evansville",
        image: "images/tournaments/Conference52.jpg",
        caption: ""
    }, {
        title: "McAllister's in Nashville",
        image: "images/tournaments/MusicCity1.jpg",
        caption: "Team Selfie @ McAllister's in Nashville"
    }, {
        title: "Decatur Post-Victory",
        image: "images/tournaments/Decatur1.jpg",
        caption: "Decatur Post-Victory Chinese Buffet"
    }, {
        title: "Taylor Post-Victory",
        image: "images/tournaments/Taylor1.jpg",
        caption: "Taylor Post-Victory Team Photo"
    }, {
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