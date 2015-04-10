function GalleryController($http,$scope,$route, $location){
    $scope.photoGallery = [{
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