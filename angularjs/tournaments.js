function TournamentsController($http,$scope,$route, $location) {
    $scope.events = [{
        title: "Music City",
        dateStart: "Mar 28",
        dateEnd : "Mar 29",
        location: "Nashville, TN",
        description : "Located in Nashville, TN, Music City is massive tournament with many big name teams like UT and Alabama at it. This was also our first sanctioned tournament of the year. Overall, the team went 1-6, but it was an enlightening experience that the team will surely learn from!",
        images : [
            "images/tournaments/MusicCity1.jpg"
        ]
    },{
        title: "Decatur",
        dateStart: "April 4",
        dateEnd : "April 4",
        location: "Decatur, IN",
        description : "Located in Decatur, IN, this is a small tournament about 1.5hrs from Ball State. With a team of 12 that including both current and Alumni players, the team took first in a 5-0 sweep. While we may have won the tournament, there were many points in the day that showed there is still room for improvement before tournament!",
        images : [
            "images/tournaments/Decatur1.jpg"
        ]
    }, {
        title: "Conference Tournament",
        dateStart: "Apr 11",
        dateEnd : "Apr 12",
        location : "Evansville, IN",
        description : "Located in Evansville, IN, this is the tournament worth all of the marbles. All of teams in the region will be competing at this tournament to see who continues on to the regional tournament. This will be an exhausting 2-day tournament, but it will be a chance to prove the tema's worth. Not to mention we will be staying at Ryan Meeks's house, and his mom makes aweomse spaghetti.",
        images : [
            "images/temp.png"
        ]
    }, {
        title: "Poultry Days",
        dateStart: "June 13",
        dateEnd : "June 14",
        location: "Versailles, OH",
        description : "Located in small town Versailles, OH, this is one of the largest and oldest tournaments in the US. The event is famous for bringing in high calibur international teams like Team USA, Canada, and even nations like the UK, China, Austraillia, and more. The Poultry Days festival actually goes starts on June 12 (Friday) and is only a 5 minute walk from the Ultimate Fields. The festival is renowned for its one of a kind BBQ chicken. This event is not a BSU team tournament, but many summer club teams in the area are going and add-on members are generally welcome to jump in. While most players choose to pitch a tent at the Ultimate fields, Brandon Groff does live in Versailles and housing can be arranged. More information can be found at www.poultrydays.com",
        images : [
            "images/tournaments/PDays1.jpg",
            "images/tournaments/PDays2.jpg",
            "images/tournaments/PDays3.gif"
        ]
    }];
}