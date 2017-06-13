angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $rootScope) {

    })

.controller('RecordCtrl', function($scope, $state,  $http, $rootScope) {
    $scope.continue = function() {
      $state.go('record');
    }
})
.controller('LaunchCtrl', function($scope, $state, $http, $rootScope, $ionicSideMenuDelegate){
  $scope.data = {};
  $scope.test = 
    url = ""
    $scope.submit = function(gros) {
  
      // Date des dernieres regles //
      $rootScope.LastMenstruation = new Date(gros);
      $rootScope.LastMenstruationTimestamp = $rootScope.LastMenstruation.getTime();
      $rootScope.LastMenstruationDate = $rootScope.LastMenstruation.toLocaleDateString();
      // Date de début de grossesse theorique //
      $rootScope.BeginOfPregnancy = new Date($rootScope.LastMenstruation.getTime() + 1209600000);
      $rootScope.BeginOfPregnancyTimestamp = $rootScope.BeginOfPregnancy.getTime();
      $rootScope.BeginOfPregnancyDate = $rootScope.BeginOfPregnancy.toLocaleDateString();

      $scope.calcul();
      }
    $scope.ModifDate = function(grosMod) {
      $rootScope.BeginOfPregnancy = new Date(grosMod);
      $rootScope.BeginOfPregnancyTimestamp = $rootScope.BeginOfPregnancy.getTime();
      $rootScope.BeginOfPregnancyDate = $rootScope.BeginOfPregnancy.toLocaleDateString();
      $scope.calcul();
    }
    $scope.calcul = function(){
      //////////////////    Calendrier Medical ////////////////////
    
      // Date de fiabilite Test de grossesse //
      $rootScope.ReliabilityTest = new Date($rootScope.BeginOfPregnancy.getTime() + 2246400000);
      $rootScope.ReliabilityTestTimestamp = $rootScope.ReliabilityTest.getTime();
      $rootScope.ReliabilityTestDate = $rootScope.ReliabilityTest.toLocaleDateString();
      
      // Date 1er consultation//
      $rootScope.FirstConsultStart = new Date($rootScope.BeginOfPregnancy.getTime() + 2246400000);
      $rootScope.FirstConsultEnd = new Date($rootScope.BeginOfPregnancy.getTime() + 3456000000);
      $rootScope.FirstConsultStartTimestamp = $rootScope.FirstConsultStart.getTime();
      $rootScope.FirstConsultEndTimestamp = $rootScope.FirstConsultEnd.getTime();
      $rootScope.FirstConsultStartDate = $rootScope.FirstConsultStart.toLocaleDateString();
      $rootScope.FirstConsultEndDate = $rootScope.FirstConsultEnd.toLocaleDateString();
      
      // Date 1er Echo //
      $rootScope.FirstEchoStart = new Date($rootScope.BeginOfPregnancy.getTime() + 5702400000);
      $rootScope.FirstEchoEnd = new Date($rootScope.BeginOfPregnancy.getTime() + 7257600000);
      $rootScope.FirstEchoStartDate = $rootScope.FirstEchoStart.toLocaleDateString();
      $rootScope.FirstEchoEndDate = $rootScope.FirstEchoEnd.toLocaleDateString();
      $rootScope.FirstEchoStartTimestamp = $rootScope.FirstEchoStart.getTime();
      $rootScope.FirstEchoEndTimestamp = $rootScope.FirstEchoEnd.getTime();
    
      //Date 1er entretien prenat
      $rootScope.FirstPrenatalCareStart = new Date($rootScope.BeginOfPregnancy.getTime() + 7344000000 );
      $rootScope.FirstPrenatalCareEnd = new Date($rootScope.BeginOfPregnancy.getTime() + 8553600000 );
      $rootScope.FirstPrenatalCareStartDate = $rootScope.FirstPrenatalCareStart.toLocaleDateString();
      $rootScope.FirstPrenatalCareStartTimestamp = $rootScope.FirstPrenatalCareStart.getTime();
      $rootScope.FirstPrenatalCareEndDate = $rootScope.FirstPrenatalCareEnd.toLocaleDateString();
      $rootScope.FirstPrenatalCareEndTimestamp = $rootScope.FirstPrenatalCareEnd.getTime();
      
      //Date 2eme entretien prenat
      $rootScope.SecondPrenatalCareStart = new Date($rootScope.BeginOfPregnancy.getTime() + 7862400000 );
      $rootScope.SecondPrenatalCareEnd = new Date($rootScope.BeginOfPregnancy.getTime() + 9072000000 );
      $rootScope.SecondPrenatalCareStartDate = $rootScope.SecondPrenatalCareStart.toLocaleDateString();
      $rootScope.SecondPrenatalCareStartTimestamp = $rootScope.SecondPrenatalCareStart.getTime();
      $rootScope.SecondPrenatalCareEndDate = $rootScope.SecondPrenatalCareEnd.toLocaleDateString();
      $rootScope.SecondPrenatalCareEndTimestamp = $rootScope.SecondPrenatalCareEnd.getTime();


      //Bilan
      $rootScope.BilanBucco = new Date($rootScope.BeginOfPregnancy.getTime() + 1.0368e+10);
      $rootScope.BilanBuccoDate = $rootScope.BilanBucco.toLocaleDateString();
      $rootScope.BilanBuccoTimestamp = $rootScope.BilanBucco.getTime();
      
      // Date 2eme Echo //
      $rootScope.SecondEchoStart = new Date($rootScope.BeginOfPregnancy.getTime() + 1.10592e+10);
      $rootScope.SecondEchoEnd = new Date($rootScope.BeginOfPregnancy.getTime() + 1.21824e+10);
      $rootScope.SecondEchoStartDate = $rootScope.SecondEchoStart.toLocaleDateString();
      $rootScope.SecondEchoEndDate = $rootScope.SecondEchoEnd.toLocaleDateString();
      $rootScope.SecondEchoStartTimestamp = $rootScope.SecondEchoStart.getTime();
      $rootScope.SecondEchoEndTimestamp = $rootScope.SecondEchoEnd.getTime();   

      //Date 3eme entretien prenat
      $rootScope.ThirdPrenatalCareStart = new Date($rootScope.BeginOfPregnancy.getTime() + 1.10592e+10);
      $rootScope.ThirdPrenatalCareEnd = new Date($rootScope.BeginOfPregnancy.getTime() + 1.21824e+10);
      $rootScope.ThirdPrenatalCareStartDate = $rootScope.ThirdPrenatalCareStart.toLocaleDateString();
      $rootScope.ThirdPrenatalCareStartTimestamp = $rootScope.ThirdPrenatalCareStart.getTime();
      $rootScope.ThirdPrenatalCareEndDate = $rootScope.ThirdPrenatalCareEnd.toLocaleDateString();
      $rootScope.ThirdPrenatalCareEndTimestamp = $rootScope.ThirdPrenatalCareEnd.getTime();
      
      //Diabete de grossesse
      $rootScope.diabeteStart = new Date($rootScope.BeginOfPregnancy.getTime() + 1.1664e+10);
      $rootScope.diabeteEnd = new Date($rootScope.BeginOfPregnancy.getTime() + 1.52928e+10);
      $rootScope.diabeteStartDate = $rootScope.diabeteStart.toLocaleDateString();
      $rootScope.diabeteStartTimestamp = $rootScope.diabeteStart.getTime();
      $rootScope.diabeteEndDate = $rootScope.diabeteEnd.toLocaleDateString();
      $rootScope.diabeteEndTimestamp = $rootScope.diabeteEnd.getTime();

      //Date 4 entretien prenat
      $rootScope.FourPrenatalCareStart = new Date($rootScope.BeginOfPregnancy.getTime() + 1.31328e+10);
      $rootScope.FourPrenatalCareEnd = new Date($rootScope.BeginOfPregnancy.getTime() + 1.43424e+10);
      $rootScope.FourPrenatalCareStartDate = $rootScope.FourPrenatalCareStart.toLocaleDateString();
      $rootScope.FourPrenatalCareStartTimestamp = $rootScope.FourPrenatalCareStart.getTime();
      $rootScope.FourPrenatalCareEndDate = $rootScope.FourPrenatalCareEnd.toLocaleDateString();
      $rootScope.FourPrenatalCareEndTimestamp = $rootScope.FourPrenatalCareEnd.getTime();
    
      //Date 5 entretien prenat
      $rootScope.FivePrenatalCareStart = new Date($rootScope.BeginOfPregnancy.getTime() + 1.57248e+10);
      $rootScope.FivePrenatalCareEnd = new Date($rootScope.BeginOfPregnancy.getTime() + 1.69344e+10);
      $rootScope.FivePrenatalCareStartDate = $rootScope.FivePrenatalCareStart.toLocaleDateString();
      $rootScope.FivePrenatalCareStartTimestamp = $rootScope.FivePrenatalCareStart.getTime();
      $rootScope.FivePrenatalCareEndDate = $rootScope.FivePrenatalCareEnd.toLocaleDateString();
      $rootScope.FivePrenatalCareEndTimestamp = $rootScope.FivePrenatalCareEnd.getTime();
    
      // Date 3eme Echo //
      $rootScope.ThirdEchoStart = new Date($rootScope.BeginOfPregnancy.getTime() + 1.71072e+10);
      $rootScope.ThirdEchoEnd = new Date($rootScope.BeginOfPregnancy.getTime() + 1.82304e+10);
      $rootScope.ThirdEchoStartDate = $rootScope.ThirdEchoStart.toLocaleDateString();
      $rootScope.ThirdEchoStartTimestamp = $rootScope.ThirdEchoStart.getTime();
      $rootScope.ThirdEchoEndDate = $rootScope.ThirdEchoEnd.toLocaleDateString();
      $rootScope.ThirdEchoEndTimestamp = $rootScope.ThirdEchoEnd.getTime();

      //Date 6 entretien prenat
      $rootScope.SixthPrenatalCareStart = new Date($rootScope.BeginOfPregnancy.getTime() + 1.84032e+10);
      $rootScope.SixthPrenatalCareEnd = new Date($rootScope.BeginOfPregnancy.getTime() + 1.96128e+10);
      $rootScope.SixthPrenatalCareStartDate = $rootScope.SixthPrenatalCareStart.toLocaleDateString();
      $rootScope.SixthPrenatalCareStartTimestamp = $rootScope.SixthPrenatalCareStart.getTime();
      $rootScope.SixthPrenatalCareEndDate = $rootScope.SixthPrenatalCareEnd.toLocaleDateString();
      $rootScope.SixthPrenatalCareEndTimestamp = $rootScope.SixthPrenatalCareEnd.getTime();
    
      //Consultation anesthesiste
      $rootScope.AnesthetistConsultStart = new Date($rootScope.BeginOfPregnancy.getTime() + 1.95264e+10);
      $rootScope.AnesthetistConsultEnd = new Date($rootScope.BeginOfPregnancy.getTime() + 2.00448e+10);
      $rootScope.AnesthetistConsultStartDate = $rootScope.AnesthetistConsultStart.toLocaleDateString();
      $rootScope.AnesthetistConsultStartTimestamp = $rootScope.AnesthetistConsultStart.getTime();
      $rootScope.AnesthetistConsultEndDate = $rootScope.AnesthetistConsultEnd.toLocaleDateString();
      $rootScope.AnesthetistConsultEndTimestamp = $rootScope.AnesthetistConsultEnd.getTime();
      
      //Date 7 entretien prenat
      $rootScope.SeventhPrenatalCareStart = new Date($rootScope.BeginOfPregnancy.getTime() + 2.10816e+10);
      $rootScope.SeventhPrenatalCareEnd = new Date($rootScope.BeginOfPregnancy.getTime() + 2.22912e+10);
      $rootScope.SeventhPrenatalCareStartDate = $rootScope.SeventhPrenatalCareStart.toLocaleDateString();
      $rootScope.SeventhPrenatalCareStartTimestamp = $rootScope.SeventhPrenatalCareStart.getTime();
      $rootScope.SeventhPrenatalCareEndDate = $rootScope.SeventhPrenatalCareEnd.toLocaleDateString();
      $rootScope.SeventhPrenatalCareEndTimestamp = $rootScope.SeventhPrenatalCareEnd.getTime();

      // Date terme theorique
      $rootScope.DateOfTerm = new Date($rootScope.BeginOfPregnancy.getTime() + 2.36736e+10);    
      $rootScope.DateOfTermDate = $rootScope.DateOfTerm.toLocaleDateString();
      $rootScope.DateOfTermTimestamp = $rootScope.DateOfTerm.getTime();

      //Nombre de semaines de grossesse 
      $rootScope.WeekPregnant = Math.round(((new Date().getTime() - $rootScope.LastMenstruation.getTime()) / (1000 * 60 * 60 * 24)) / 7);

      // Calendrier Administratif

      // Pregnant Declaration
      $rootScope.PregnantDeclaration = new Date($rootScope.BeginOfPregnancy.getTime() + 9158400000);
      $rootScope.PregnantDeclarationDate = $rootScope.PregnantDeclaration.toLocaleDateString();
      $rootScope.PregnantDeclarationTimestamp = $rootScope.PregnantDeclaration.getTime();

      //Employer Information
      $rootScope.EmployerInformation = "N/A";

      //Choosing Your Maternity
      $rootScope.YourMaternity = new Date($rootScope.BeginOfPregnancy.getTime() + 9158400000);
      $rootScope.YourMaternityDate = $rootScope.YourMaternity.toLocaleDateString();
      $rootScope.YourMaternityTimestamp = $rootScope.YourMaternity.getTime();

      //Information on childcare arrangements

      //Information on aid

      //Updating Your Vital Card
      $rootScope.VitalCard = new Date($rootScope.BeginOfPregnancy.getTime() + 1.45152e+10);
      $rootScope.VitalCardDate = $rootScope.VitalCard.toLocaleDateString();
      $rootScope.VitalCardimestamp = $rootScope.VitalCard.getTime();

      //Paternity Recognition
      $rootScope.PaternityRecognition = new Date($rootScope.BeginOfPregnancy.getTime() + 1.2096e+10);
      $rootScope.PaternityRecognitionDate = $rootScope.PaternityRecognition.toLocaleDateString();
      $rootScope.PaternityRecognitionTimestamp = $rootScope.PaternityRecognition.getTime();

      //Maternity Leave
      $rootScope.MaternityLeave = new Date($rootScope.BeginOfPregnancy);
      $rootScope.MaternityLeaveDate = $rootScope.MaternityLeave.toLocaleDateString();
      $rootScope.MaternityLeaveTimestamp = $rootScope.MaternityLeave.getTime();

      //Inscription on the list of a nursery
      $rootScope.InscriptionNursery = new Date($rootScope.BeginOfPregnancyTimestamp + 1.45152e+10);
      $rootScope.InscriptionNurseryDate = $rootScope.InscriptionNursery.toLocaleDateString();
      $rootScope.InscriptionNurseryTimestamp = $rootScope.InscriptionNursery.getTime();

      //My Maternity Insurance Plan

      //Deadline for air travel
      $rootScope.DeadlineAirTravel = new Date($rootScope.BeginOfPregnancyTimestamp + 1.8144e+10);
      $rootScope.DeadlineAirTravelDate = $rootScope.DeadlineAirTravel.toLocaleDateString();
      $rootScope.DeadlineAirTravelTimestamp = $rootScope.DeadlineAirTravel.getTime();

      //Declaration of birth

      //Birth registration with organizations

      //End of maternity leave

      //Paternity leave



      $state.go('app.toxoAsk');
    }


})

.controller('ToxoAskCtrl', function($scope, $state, $http, $rootScope, $ionicSideMenuDelegate){
  $scope.data = {};
  $scope.test = 
  url = ""

  $scope.yes = function(){
    $rootScope.Toxo = 1;
    $state.go('app.Mcalendar');
  }
  $scope.no = function(){
    $rootScope.Toxo = 0;
   $state.go('app.Mcalendar'); 
    //$scope.planificationNotif();
  }
  $scope.IDontKnow = function(){
    $rootScope.Toxo = 2;
    $state.go('app.Mcalendar');
    //$scope.planificationNotif();
  }
 /* $scope.planificationNotif = function(){
    $rootScope.ToxoDateOne =  ($rootScope.BeginOfPregnancyTimestamp + 2246400000) - new Date().getTime() ;
    $rootScope.ToxoDateTwo = ($rootScope.BeginOfPregnancyTimestamp + 4838400000) - new Date().getTime() ;
    $rootScope.ToxoDateThree = ($rootScope.BeginOfPregnancyTimestamp + 7430400000) - new Date().getTime() ;
    $rootScope.ToxoDateFour = ($rootScope.BeginOfPregnancyTimestamp + 1.00224e+10) - new Date().getTime() ;
    $rootScope.ToxoDateFive = ($rootScope.BeginOfPregnancyTimestamp + 1.26144e+10) - new Date().getTime() ;
    $rootScope.ToxoDateSix = ($rootScope.BeginOfPregnancyTimestamp + 1.52064e+10) - new Date().getTime() ;
    $rootScope.ToxoDateSeven = ($rootScope.BeginOfPregnancyTimestamp + 1.77984e+10) - new Date().getTime() ;
    $rootScope.ToxoDateEight = ($rootScope.BeginOfPregnancyTimestamp + 2.03904e+10) - new Date().getTime() ;
    if ($rootScope.ToxoDateOne >= 0){
       }

    if ($rootScope.ToxoDateTwo >= 0){
      }

    if ($rootScope.ToxoDateThree >= 0){
     }

    if ($rootScope.ToxoDateFour){
        }

    if ($rootScope.ToxoDateFive){
        }

    if ($rootScope.ToxoDateSix){
    }

    if ($rootScope.ToxoDateSeven){
    }

    if ($rootScope.ToxoDateHeight){
    }
    
    $state.go('app.Mcalendar');
  }*/
})

.controller('MCalendarCtrl', function($scope, $state, $http, $rootScope, $ionicSideMenuDelegate){
    $scope.data = {};
    $scope.test = 
    url = ""
    $rootScope.today = new Date().getTime();
    $rootScope.nbSemaine = Math.round(((new Date().getTime() - $rootScope.BeginOfPregnancy.getTime()) / (1000 * 60 * 60 * 24)) / 7);
    $scope.tes = function(){
      console.log("test");
    }
       $scope.hideA = true;
       $scope.hideAA = true;
       $scope.hideAAA = true;
       $scope.hideB = true;
       $scope.hideC = true;
       $scope.hideD = true;
       $scope.hideE = true;
       $scope.hideF = true;
       $scope.hideG = true;
       $scope.hideH = true;
       $scope.hideI = true;
       $scope.hideJ = true;
       $scope.hideK = true;
       $scope.hideL = true;
       $scope.hideM = true;
       $scope.hideN = true;
       $scope.hideO = true;
       $scope.hideP = true;


$scope.changeA = function(){
if ($scope.hideA == false)
   $scope.hideA = true;
else
   $scope.hideA = false;
}
$scope.changeAA = function(){
if ($scope.hideAA == false)
   $scope.hideAA = true;
else
   $scope.hideAA = false;
}
$scope.changeAAA = function(){
if ($scope.hideAAA == false)
   $scope.hideAAA = true;
else
   $scope.hideAAA = false;
}
$scope.changeB = function(){
if ($scope.hideB == false)
   $scope.hideB = true;
else
   $scope.hideB = false;
}
$scope.changeC = function(){
if ($scope.hideC == false)
   $scope.hideC = true;
else
   $scope.hideC = false;
}
$scope.changeD = function(){
if ($scope.hideD == false)
   $scope.hideD = true;
else
   $scope.hideD = false;
}
$scope.changeE = function(){
if ($scope.hideE == false)
   $scope.hideE = true;
else
   $scope.hideE = false;
}
$scope.changeF = function(){
if ($scope.hideF == false)
   $scope.hideF = true;
else
   $scope.hideF = false;
}
$scope.changeG = function(){
if ($scope.hideG == false)
   $scope.hideG = true;
else
   $scope.hideG = false;
}
$scope.changeH = function(){
if ($scope.hideH == false)
   $scope.hideH = true;
else
   $scope.hideH = false;
}
$scope.changeI = function(){
if ($scope.hideI == false)
   $scope.hideI = true;
else
   $scope.hideI = false;
}
$scope.changeJ = function(){
if ($scope.hideJ == false)
   $scope.hideJ = true;
else
   $scope.hideJ = false;
}
$scope.changeK = function(){
if ($scope.hideK == false)
   $scope.hideK = true;
else
   $scope.hideK = false;
}
$scope.changeL = function(){
if ($scope.hideL == false)
   $scope.hideL = true;
else
   $scope.hideL = false;
}
$scope.changeM = function(){
if ($scope.hideM == false)
   $scope.hideM = true;
else
   $scope.hideM = false;
}
$scope.changeN = function(){
if ($scope.hideN == false)
   $scope.hideN = true;
else
   $scope.hideN = false;
}
$scope.changeO = function(){
if ($scope.hideO == false)
   $scope.hideO = true;
else
   $scope.hideO = false;
}
$scope.changeP = function(){
if ($scope.hideP == false)
   $scope.hideP = true;
else
   $scope.hideP = false;
}
})

.controller('ACalendarCtrl', function($scope, $state, $http, $rootScope, $ionicSideMenuDelegate){
    $scope.data = {};
    $scope.test = 
    url = ""
    $rootScope.today = new Date().getTime();
    $rootScope.nbSemaine = Math.round(((new Date().getTime() - $rootScope.BeginOfPregnancy.getTime()) / (1000 * 60 * 60 * 24)) / 7);
    $scope.tes = function(){
      console.log("test");
    }
       $scope.AhideA = true;
       $scope.AhideAA = true;
       $scope.AhideAAA = true;
       $scope.AhideB = true;
       $scope.AhideC = true;
       $scope.AhideD = true;
       $scope.AhideE = true;
       $scope.AhideF = true;
       $scope.AhideG = true;
       $scope.AhideH = true;
       $scope.AhideI = true;
       $scope.AhideJ = true;
       $scope.AhideK = true;
       $scope.AhideL = true;
       $scope.AhideM = true;
       $scope.AhideN = true;
       $scope.AhideO = true;
       $scope.AhideP = true;


$scope.changeA = function(){
if ($scope.AhideA == false)
   $scope.AhideA = true;
else
   $scope.AhideA = false;
}
$scope.changeB = function(){
if ($scope.AhideB == false)
   $scope.AhideB = true;
else
   $scope.AhideB = false;
}
$scope.changeC = function(){
if ($scope.AhideC == false)
   $scope.AhideC = true;
else
   $scope.AhideC = false;
}
$scope.changeD = function(){
if ($scope.AhideD == false)
   $scope.AhideD = true;
else
   $scope.AhideD = false;
}
$scope.changeE = function(){
if ($scope.AhideE == false)
   $scope.AhideE = true;
else
   $scope.AhideE = false;
}
$scope.changeF = function(){
if ($scope.AhideF == false)
   $scope.AhideF = true;
else
   $scope.AhideF = false;
}
$scope.changeG = function(){
if ($scope.AhideG == false)
   $scope.AhideG = true;
else
   $scope.AhideG = false;
}
$scope.changeH = function(){
if ($scope.AhideH == false)
   $scope.AhideH = true;
else
   $scope.AhideH = false;
}
$scope.changeI = function(){
if ($scope.AhideI == false)
   $scope.AhideI = true;
else
   $scope.AhideI = false;
}
$scope.changeJ = function(){
if ($scope.AhideJ == false)
   $scope.AhideJ = true;
else
   $scope.AhideJ = false;
}
$scope.changeK = function(){
if ($scope.AhideK == false)
   $scope.AhideK = true;
else
   $scope.AhideK = false;
}
$scope.changeL = function(){
if ($scope.AhideL == false)
   $scope.AhideL = true;
else
   $scope.AhideL = false;
}
$scope.changeM = function(){
if ($scope.AhideM == false)
   $scope.AhideM = true;
else
   $scope.AhideM = false;
}
$scope.changeN = function(){
if ($scope.AhideN == false)
   $scope.AhideN = true;
else
   $scope.AhideN = false;
}
$scope.changeO = function(){
if ($scope.AhideO == false)
   $scope.AhideO = true;
else
   $scope.AhideO = false;
}
$scope.changeP = function(){
if ($scope.AhideP == false)
   $scope.AhideP = true;
else
   $scope.AhideP = false;
}
})

.controller('ECalendarCtrl', function($scope, $state, $http, $rootScope, $ionicSideMenuDelegate){
    $scope.data = {};
    $scope.test = 
    url = ""
    $rootScope.today = new Date().getTime();
    $rootScope.nbSemaine = Math.round(((new Date().getTime() - $rootScope.BeginOfPregnancy.getTime()) / (1000 * 60 * 60 * 24)) / 7);
    $scope.tes = function(){
      console.log("test");
    }
       $scope.EhideA = true;
       $scope.EhideAA = true;
       $scope.EhideAAA = true;
       $scope.EhideB = true;
       $scope.EhideC = true;
       $scope.EhideD = true;
       $scope.EhideE = true;
       $scope.EhideF = true;
       $scope.EhideG = true;
       $scope.EhideH = true;
       $scope.EhideI = true;
       $scope.EhideJ = true;
       $scope.EhideK = true;
       $scope.EhideL = true;
       $scope.EhideM = true;
       $scope.EhideN = true;
       $scope.EhideO = true;
       $scope.EhideP = true;


$scope.changeA = function(){
if ($scope.EhideA == false)
   $scope.EhideA = true;
else
   $scope.EhideA = false;
}
$scope.changeAA = function(){
if ($scope.EhideAA == false)
   $scope.EhideAA = true;
else
   $scope.EhideAA = false;
}
$scope.changeAAA = function(){
if ($scope.EhideAAA == false)
   $scope.EhideAAA = true;
else
   $scope.EhideAAA = false;
}
$scope.changeB = function(){
if ($scope.EhideB == false)
   $scope.EhideB = true;
else
   $scope.EhideB = false;
}
$scope.changeC = function(){
if ($scope.EhideC == false)
   $scope.EhideC = true;
else
   $scope.EhideC = false;
}
$scope.changeD = function(){
if ($scope.EhideD == false)
   $scope.EhideD = true;
else
   $scope.EhideD = false;
}
$scope.changeE = function(){
if ($scope.EhideE == false)
   $scope.EhideE = true;
else
   $scope.EhideE = false;
}
$scope.changeF = function(){
if ($scope.EhideF == false)
   $scope.EhideF = true;
else
   $scope.EhideF = false;
}
$scope.changeG = function(){
if ($scope.EhideG == false)
   $scope.EhideG = true;
else
   $scope.EhideG = false;
}
$scope.changeH = function(){
if ($scope.EhideH == false)
   $scope.EhideH = true;
else
   $scope.EhideH = false;
}
$scope.changeI = function(){
if ($scope.EhideI == false)
   $scope.EhideI = true;
else
   $scope.EhideI = false;
}
$scope.changeJ = function(){
if ($scope.EhideJ == false)
   $scope.EhideJ = true;
else
   $scope.EhideJ = false;
}
$scope.changeK = function(){
if ($scope.EhideK == false)
   $scope.EhideK = true;
else
   $scope.EhideK = false;
}
$scope.changeL = function(){
if ($scope.EhideL == false)
   $scope.EhideL = true;
else
   $scope.EhideL = false;
}
$scope.changeM = function(){
if ($scope.EhideM == false)
   $scope.EhideM = true;
else
   $scope.EhideM = false;
}
$scope.changeN = function(){
if ($scope.EhideN == false)
   $scope.EhideN = true;
else
   $scope.EhideN = false;
}
$scope.changeO = function(){
if ($scope.EhideO == false)
   $scope.EhideO = true;
else
   $scope.EhideO = false;
}
$scope.changeP = function(){
if ($scope.EhideP == false)
   $scope.EhideP = true;
else
   $scope.EhideP = false;
}
})

.controller('Step1Ctrl', function($scope, $state,  $http, $rootScope) {
  $scope.data = {};
  $scope.test = 
  url = ""
  $scope.nb = function(HAge) {
    $rootScope.Age = HAge;
    if ($rootScope.Age > 0){
      if ($rootScope.Age > 42)
        $rootScope.score = 50;
      else if ($rootScope.Age == 42)
        $rootScope.score = 20;
      else if ($rootScope.Age > 38)
        $rootScope.score = 2;
      else 
        $rootScope.score = 0;
      $state.go('step2');
    }
  }
})

.controller('Step2Ctrl', function($scope, $state, $http, $rootScope) {
    $scope.data = {};
  $scope.test = 
    url = ""
    $scope.yeschecked = function(yes, no){
      if (yes == false && no == false){
        yes = true;
        no=false;
        $scope.yesc=true;
        $scope.noc=false;
      }
      else if (yes == true && no == false){
        yes = false;
        no=false;
        $scope.yesc=false;
        $scope.noc=false;
      }
      else if (yes == false && no == true){
        yes = true;
        no = false;
        $scope.yesc=true;
        $scope.noc=false;
      }
      else if (yes == true && no == true){
        yes = true;
        no=false;
        $scope.yesc=true;
        $scope.noc=false;
      }
      else{
        yes = true;
        no=false;
        $scope.yesc=true;
        $scope.noc=false;
      }
    }
    $scope.nochecked = function(yes, no){
      if (no == false && yes == false){
        no = true;
        yes=false;
        $scope.yesc=false;
        $scope.noc=true;
      }
      else if (no == true && yes == false){
        no = false;
        yes=false;
        $scope.noc=false;
        $scope.yesc=false;
      }
      else if (no == false && yes == true){
        no = true;
        yes = false;
        $scope.yesc=false;
        $scope.noc=true;
      }
      else if (no == true && yes == true){
        no = true;
        yes=false;
        $scope.yesc=false;
        $scope.noc=true;
      }
      else{
        no = true;
        yes=false;
        $scope.yesc=false;
        $scope.noc=true;
      }
    }
    $scope.Submit = function(yes, no){
      if (yes==true)
        $rootScope.Pregnant = 1;
      else
        $rootScope.Pregnant = 0;
      if ($rootScope.Pregnant == 1)
      $state.go('step2-1');
      else
     $state.go('step3');
    }
})
.controller('Step2-1Ctrl', function($scope, $state, $http, $rootScope) {
    $scope.data = {};
  $scope.test = 
    url = ""
    $scope.yeschecked = function(yes, no){
      if (yes == false && no == false){
        yes = true;
        no=false;
        $scope.yesc=true;
        $scope.noc=false;
      }
      else if (yes == true && no == false){
        yes = false;
        no=false;
        $scope.yesc=false;
        $scope.noc=false;
      }
      else if (yes == false && no == true){
        yes = true;
        no = false;
        $scope.yesc=true;
        $scope.noc=false;
      }
      else if (yes == true && no == true){
        yes = true;
        no=false;
        $scope.yesc=true;
        $scope.noc=false;
      }
      else{
        yes = true;
        no=false;
        $scope.yesc=true;
        $scope.noc=false;
      }
    }
    $scope.nochecked = function(yes, no){
      if (no == false && yes == false){
        no = true;
        yes=false;
        $scope.yesc=false;
        $scope.noc=true;
      }
      else if (no == true && yes == false){
        no = false;
        yes=false;
        $scope.noc=false;
        $scope.yesc=false;
      }
      else if (no == false && yes == true){
        no = true;
        yes = false;
        $scope.yesc=false;
        $scope.noc=true;
      }
      else if (no == true && yes == true){
        no = true;
        yes=false;
        $scope.yesc=false;
        $scope.noc=true;
      }
      else{
        no = true;
        yes=false;
        $scope.yesc=false;
        $scope.noc=true;
      }
    }
    $scope.Submit = function(yes, no){
      if (yes==true)
        $rootScope.PregnantGood = 1;
      else
        $rootScope.PregnantBad = 0;
      if (yes == true || no == true )
      $state.go('step3');
    }
})

.controller('Step3Ctrl', function($scope, $state, $http, $rootScope) {
  $scope.data = {};
  $scope.test = 
  url = ""
      $scope.yeschecked = function(yes, no){
      if (yes == false && no == false){
        yes = true;
        no=false;
        $scope.yesc=true;
        $scope.noc=false;
      }
      else if (yes == true && no == false){
        yes = false;
        no=false;
        $scope.yesc=false;
        $scope.noc=false;
      }
      else if (yes == false && no == true){
        yes = true;
        no = false;
        $scope.yesc=true;
        $scope.noc=false;
      }
      else if (yes == true && no == true){
        yes = true;
        no=false;
        $scope.yesc=true;
        $scope.noc=false;
      }
      else{
        yes = true;
        no=false;
        $scope.yesc=true;
        $scope.noc=false;
      }
    }
    $scope.nochecked = function(yes, no){
      if (no == false && yes == false){
        no = true;
        yes=false;
        $scope.yesc=false;
        $scope.noc=true;
      }
      else if (no == true && yes == false){
        no = false;
        yes=false;
        $scope.noc=false;
        $scope.yesc=false;
      }
      else if (no == false && yes == true){
        no = true;
        yes = false;
        $scope.yesc=false;
        $scope.noc=true;
      }
      else if (no == true && yes == true){
        no = true;
        yes=false;
        $scope.yesc=false;
        $scope.noc=true;
      }
      else{
        no = true;
        yes=false;
        $scope.yesc=false;
        $scope.noc=true;
      }
    }
    $scope.Submit = function(yes, no){
      if (yes==true){
        $rootScope.Smoke = 1;
        $rootScope.score += 2;
      }
      else
        $rootScope.Smoke = 0;
      if (yes == true || no == true )
      $state.go('step4');
    }
})


.controller('Step4Ctrl', function($scope, $state, $http, $rootScope) {
  $scope.data = {};
  $scope.test = 
  url = ""
      $scope.yeschecked = function(yes, no){
      if (yes == false && no == false){
        yes = true;
        no=false;
        $scope.yesc=true;
        $scope.noc=false;
      }
      else if (yes == true && no == false){
        yes = false;
        no=false;
        $scope.yesc=false;
        $scope.noc=false;
      }
      else if (yes == false && no == true){
        yes = true;
        no = false;
        $scope.yesc=true;
        $scope.noc=false;
      }
      else if (yes == true && no == true){
        yes = true;
        no=false;
        $scope.yesc=true;
        $scope.noc=false;
      }
      else{
        yes = true;
        no=false;
        $scope.yesc=true;
        $scope.noc=false;
      }
    }
    $scope.nochecked = function(yes, no){
      if (no == false && yes == false){
        no = true;
        yes=false;
        $scope.yesc=false;
        $scope.noc=true;
      }
      else if (no == true && yes == false){
        no = false;
        yes=false;
        $scope.noc=false;
        $scope.yesc=false;
      }
      else if (no == false && yes == true){
        no = true;
        yes = false;
        $scope.yesc=false;
        $scope.noc=true;
      }
      else if (no == true && yes == true){
        no = true;
        yes=false;
        $scope.yesc=false;
        $scope.noc=true;
      }
      else{
        no = true;
        yes=false;
        $scope.yesc=false;
        $scope.noc=true;
      }
    }
    $scope.Submit = function(yes, no){
      if ($scope.yesc == true){
        $rootScope.Child = 1;
        $state.go('step5');
      }
      else {
        $rootScope.Child = 0;
        if (yes == true || no == true )
        $state.go('step13');
      }
    }
})


.controller('Step5Ctrl', function($scope, $state,  $http, $rootScope) {
  $scope.data = {};
  $scope.test = 
  url = ""
  $scope.nb = function(HChild) {
    $rootScope.HChild = HChild;
    if ($rootScope.HChild > 0){
      $state.go('step6');
    }
  }
})

.controller('Step6Ctrl', function($scope, $state, $http, $rootScope) {
    $scope.data = {};
  $scope.test = 
    url = ""
    $scope.yeschecked = function(yes, no){
      if (yes == false && no == false){
        yes = true;
        no=false;
        $scope.yesc=true;
        $scope.noc=false;
      }
      else if (yes == true && no == false){
        yes = false;
        no=false;
        $scope.yesc=false;
        $scope.noc=false;
      }
      else if (yes == false && no == true){
        yes = true;
        no = false;
        $scope.yesc=true;
        $scope.noc=false;
      }
      else if (yes == true && no == true){
        yes = true;
        no=false;
        $scope.yesc=true;
        $scope.noc=false;
      }
      else{
        yes = true;
        no=false;
        $scope.yesc=true;
        $scope.noc=false;
      }
    }
    $scope.nochecked = function(yes, no){
      if (no == false && yes == false){
        no = true;
        yes=false;
        $scope.yesc=false;
        $scope.noc=true;
      }
      else if (no == true && yes == false){
        no = false;
        yes=false;
        $scope.noc=false;
        $scope.yesc=false;
      }
      else if (no == false && yes == true){
        no = true;
        yes = false;
        $scope.yesc=false;
        $scope.noc=true;
      }
      else if (no == true && yes == true){
        no = true;
        yes=false;
        $scope.yesc=false;
        $scope.noc=true;
      }
      else{
        no = true;
        yes=false;
        $scope.yesc=false;
        $scope.noc=true;
      }
    }
    $scope.Submit = function(yes, no){
      if (yes==true){
        $rootScope.BigChild = 1;
        $rootScope.score += 50;
        }
      else 
        $rootScope.BigChild = 0;
      if (yes == true || no == true ) {
        if ($rootScope.HChild == 1 && $rootScope.BigChild == 1)
          $state.go('step9');
       else
        $state.go('step8');
      }
    }
})

.controller('Step8Ctrl', function($scope, $state, $http, $rootScope) {
  $scope.data = {};
  $scope.test = 
  url = ""
        $scope.yeschecked = function(yes, no){
      if (yes == false && no == false){
        yes = true;
        no=false;
        $scope.yesc=true;
        $scope.noc=false;
      }
      else if (yes == true && no == false){
        yes = false;
        no=false;
        $scope.yesc=false;
        $scope.noc=false;
      }
      else if (yes == false && no == true){
        yes = true;
        no = false;
        $scope.yesc=true;
        $scope.noc=false;
      }
      else if (yes == true && no == true){
        yes = true;
        no=false;
        $scope.yesc=true;
        $scope.noc=false;
      }
      else{
        yes = true;
        no=false;
        $scope.yesc=true;
        $scope.noc=false;
      }
    }
    $scope.nochecked = function(yes, no){
      if (no == false && yes == false){
        no = true;
        yes=false;
        $scope.yesc=false;
        $scope.noc=true;
      }
      else if (no == true && yes == false){
        no = false;
        yes=false;
        $scope.noc=false;
        $scope.yesc=false;
      }
      else if (no == false && yes == true){
        no = true;
        yes = false;
        $scope.yesc=false;
        $scope.noc=true;
      }
      else if (no == true && yes == true){
        no = true;
        yes=false;
        $scope.yesc=false;
        $scope.noc=true;
      }
      else{
        no = true;
        yes=false;
        $scope.yesc=false;
        $scope.noc=true;
      }
    }
    $scope.Submit = function(yes, no){
      if (yes==true){
        $rootScope.LessChild = 1;
        $rootScope.score += 50;
        $state.go('step9');
      }
      else {
        $rootScope.LessChild = 0;
      if (yes == true || no == true )
        $state.go('step10');
      }
    }
})

.controller('Step9Ctrl', function($scope, $state,  $http, $rootScope) {
      $scope.data = {};
  $scope.test = 
    url = ""
      $scope.yeschecked = function(yes, no){
      if (yes == false && no == false){
        yes = true;
        no=false;
        $scope.yesc=true;
        $scope.noc=false;
      }
      else if (yes == true && no == false){
        yes = false;
        no=false;
        $scope.yesc=false;
        $scope.noc=false;
      }
      else if (yes == false && no == true){
        yes = true;
        no = false;
        $scope.yesc=true;
        $scope.noc=false;
      }
      else if (yes == true && no == true){
        yes = true;
        no=false;
        $scope.yesc=true;
        $scope.noc=false;
      }
      else{
        yes = true;
        no=false;
        $scope.yesc=true;
        $scope.noc=false;
      }
    }
    $scope.nochecked = function(yes, no){
      if (no == false && yes == false){
        no = true;
        yes=false;
        $scope.yesc=false;
        $scope.noc=true;
      }
      else if (no == true && yes == false){
        no = false;
        yes=false;
        $scope.noc=false;
        $scope.yesc=false;
      }
      else if (no == false && yes == true){
        no = true;
        yes = false;
        $scope.yesc=false;
        $scope.noc=true;
      }
      else if (no == true && yes == true){
        no = true;
        yes=false;
        $scope.yesc=false;
        $scope.noc=true;
      }
      else{
        no = true;
        yes=false;
        $scope.yesc=false;
        $scope.noc=true;
      }
    }
    $scope.Submit = function(yes, no){
      if (yes==true) {
        $rootScope.Prema = 1;
        $rootScope.score += 50;
      }
      else
        $rootScope.Prema = 0;
       if (yes == true || no == true )
      $state.go('step10');
    }
})

.controller('Step10Ctrl', function($scope, $state, $http, $rootScope) {
      $scope.data = {};
  $scope.test = 
    url = ""
        $scope.yeschecked = function(yes, no){
      if (yes == false && no == false){
        yes = true;
        no=false;
        $scope.yesc=true;
        $scope.noc=false;
      }
      else if (yes == true && no == false){
        yes = false;
        no=false;
        $scope.yesc=false;
        $scope.noc=false;
      }
      else if (yes == false && no == true){
        yes = true;
        no = false;
        $scope.yesc=true;
        $scope.noc=false;
      }
      else if (yes == true && no == true){
        yes = true;
        no=false;
        $scope.yesc=true;
        $scope.noc=false;
      }
      else{
        yes = true;
        no=false;
        $scope.yesc=true;
        $scope.noc=false;
      }
    }
    $scope.nochecked = function(yes, no){
      if (no == false && yes == false){
        no = true;
        yes=false;
        $scope.yesc=false;
        $scope.noc=true;
      }
      else if (no == true && yes == false){
        no = false;
        yes=false;
        $scope.noc=false;
        $scope.yesc=false;
      }
      else if (no == false && yes == true){
        no = true;
        yes = false;
        $scope.yesc=false;
        $scope.noc=true;
      }
      else if (no == true && yes == true){
        no = true;
        yes=false;
        $scope.yesc=false;
        $scope.noc=true;
      }
      else{
        no = true;
        yes=false;
        $scope.yesc=false;
        $scope.noc=true;
      }
    }
    $scope.Submit = function(yes, no){
      if (yes==true) {
        $rootScope.PreEclamp = 1;
        $rootScope.score += 50;
      }
      else
        $rootScope.PreEclamp = 0;
      if (yes == true || no == true )
      $state.go('step11');
    }
})


.controller('Step11Ctrl', function($scope, $state, $http, $rootScope) {
      $scope.data = {};
  $scope.test = 
    url = ""
        $scope.yeschecked = function(yes, no){
      if (yes == false && no == false){
        yes = true;
        no=false;
        $scope.yesc=true;
        $scope.noc=false;
      }
      else if (yes == true && no == false){
        yes = false;
        no=false;
        $scope.yesc=false;
        $scope.noc=false;
      }
      else if (yes == false && no == true){
        yes = true;
        no = false;
        $scope.yesc=true;
        $scope.noc=false;
      }
      else if (yes == true && no == true){
        yes = true;
        no=false;
        $scope.yesc=true;
        $scope.noc=false;
      }
      else{
        yes = true;
        no=false;
        $scope.yesc=true;
        $scope.noc=false;
      }
    }
    $scope.nochecked = function(yes, no){
      if (no == false && yes == false){
        no = true;
        yes=false;
        $scope.yesc=false;
        $scope.noc=true;
      }
      else if (no == true && yes == false){
        no = false;
        yes=false;
        $scope.noc=false;
        $scope.yesc=false;
      }
      else if (no == false && yes == true){
        no = true;
        yes = false;
        $scope.yesc=false;
        $scope.noc=true;
      }
      else if (no == true && yes == true){
        no = true;
        yes=false;
        $scope.yesc=false;
        $scope.noc=true;
      }
      else{
        no = true;
        yes=false;
        $scope.yesc=false;
        $scope.noc=true;
      }
    }
    $scope.Submit = function(yes, no){
      if (yes==true) {
        $rootScope.PregnantDiabete = 1;
        $rootScope.score += 2;
      }
      else
        $rootScope.PregnantDiabete = 0;
      if (yes == true || no == true )
      $state.go('step13');
    }
})


.controller('Step12Ctrl', function($scope, $state, $http, $rootScope) {
      $scope.data = {};
  $scope.test = 
    url = ""
  $scope.nb = function(NbCesa) {
    $rootScope.NbCesa = NbCesa;
    if ($rootScope.NbCesa > 0){
      $rootScope.score += 2;
      $state.go('step13');
    }
    else if ($rootScope.nbCesa == 0)
      $state.go('step13');  
  }
})

.controller('Step13Ctrl', function($scope, $state, $http, $rootScope) {
      $scope.data = {};
  $scope.test = 
    url = ""

            $scope.yeschecked = function(yes, no){
      if (yes == false && no == false){
        yes = true;
        no=false;
        $scope.yesc=true;
        $scope.noc=false;
      }
      else if (yes == true && no == false){
        yes = false;
        no=false;
        $scope.yesc=false;
        $scope.noc=false;
      }
      else if (yes == false && no == true){
        yes = true;
        no = false;
        $scope.yesc=true;
        $scope.noc=false;
      }
      else if (yes == true && no == true){
        yes = true;
        no=false;
        $scope.yesc=true;
        $scope.noc=false;
      }
      else{
        yes = true;
        no=false;
        $scope.yesc=true;
        $scope.noc=false;
      }
    }
    $scope.nochecked = function(yes, no){
      if (no == false && yes == false){
        no = true;
        yes=false;
        $scope.yesc=false;
        $scope.noc=true;
      }
      else if (no == true && yes == false){
        no = false;
        yes=false;
        $scope.noc=false;
        $scope.yesc=false;
      }
      else if (no == false && yes == true){
        no = true;
        yes = false;
        $scope.yesc=false;
        $scope.noc=true;
      }
      else if (no == true && yes == true){
        no = true;
        yes=false;
        $scope.yesc=false;
        $scope.noc=true;
      }
      else{
        no = true;
        yes=false;
        $scope.yesc=false;
        $scope.noc=true;
      }
    }
    $scope.Submit = function(yes, no){
      if (yes==true){
        $rootScope.Miscarriage= 1;
        $rootScope.score += 2;
      if (yes == true || no == true )
        $state.go('step14');
      }
      else {
        $rootScope.Miscarriage= 0;
        $state.go('step15');
      }
    }
})
.controller('Step14Ctrl', function($scope, $state,  $http, $rootScope) {
      $scope.data = {};
  $scope.test = 
    url = ""
    $scope.nb = function(NbMiacariage) {
      $rootScope.miscarriage = NbMiacariage;
      if ($rootScope.miscarriage > 0){
        $state.go('step15');
      }
    }
})

.controller('Step15Ctrl', function($scope, $state,  $http, $rootScope) {
      $scope.data = {};
  $scope.test = 
    url = ""
        $scope.yeschecked = function(yes, no){
      if (yes == false && no == false){
        yes = true;
        no=false;
        $scope.yesc=true;
        $scope.noc=false;
      }
      else if (yes == true && no == false){
        yes = false;
        no=false;
        $scope.yesc=false;
        $scope.noc=false;
      }
      else if (yes == false && no == true){
        yes = true;
        no = false;
        $scope.yesc=true;
        $scope.noc=false;
      }
      else if (yes == true && no == true){
        yes = true;
        no=false;
        $scope.yesc=true;
        $scope.noc=false;
      }
      else{
        yes = true;
        no=false;
        $scope.yesc=true;
        $scope.noc=false;
      }
    }
    $scope.nochecked = function(yes, no){
      if (no == false && yes == false){
        no = true;
        yes=false;
        $scope.yesc=false;
        $scope.noc=true;
      }
      else if (no == true && yes == false){
        no = false;
        yes=false;
        $scope.noc=false;
        $scope.yesc=false;
      }
      else if (no == false && yes == true){
        no = true;
        yes = false;
        $scope.yesc=false;
        $scope.noc=true;
      }
      else if (no == true && yes == true){
        no = true;
        yes=false;
        $scope.yesc=false;
        $scope.noc=true;
      }
      else{
        no = true;
        yes=false;
        $scope.yesc=false;
        $scope.noc=true;
      }
    }
    $scope.Submit = function(yes, no){
      if (yes==true) {
        $rootScope.IMG = 1;
        $rootScope.score += 2;
      }
      else
        $rootScope.IMG = 0;
      if (yes == true || no == true )
      $state.go('step16');
    }
})

.controller('Step16Ctrl', function($scope, $state, $http, $rootScope) {
  $scope.data = {};
  $scope.test = 
  url = ""
  $scope.data.nb = 0;
  $scope.nb = function() {
    $rootScope.Alcool = $scope.data.nb;
    if ($rootScope.Alcool >= 0){
      if ($rootScope.Alcool > 10){
        $rootScope.score == 400;
      }
      $state.go('step17');
    }
  }
})


.controller('Step17Ctrl', function($scope, $state, $http, $rootScope) {
      $scope.data = {};
  $scope.test = 
    url = ""
      $scope.yeschecked = function(yes, no){
      if (yes == false && no == false){
        yes = true;
        no=false;
        $scope.yesc=true;
        $scope.noc=false;
      }
      else if (yes == true && no == false){
        yes = false;
        no=false;
        $scope.yesc=false;
        $scope.noc=false;
      }
      else if (yes == false && no == true){
        yes = true;
        no = false;
        $scope.yesc=true;
        $scope.noc=false;
      }
      else if (yes == true && no == true){
        yes = true;
        no=false;
        $scope.yesc=true;
        $scope.noc=false;
      }
      else{
        yes = true;
        no=false;
        $scope.yesc=true;
        $scope.noc=false;
      }
    }
    $scope.nochecked = function(yes, no){
      if (no == false && yes == false){
        no = true;
        yes=false;
        $scope.yesc=false;
        $scope.noc=true;
      }
      else if (no == true && yes == false){
        no = false;
        yes=false;
        $scope.noc=false;
        $scope.yesc=false;
      }
      else if (no == false && yes == true){
        no = true;
        yes = false;
        $scope.yesc=false;
        $scope.noc=true;
      }
      else if (no == true && yes == true){
        no = true;
        yes=false;
        $scope.yesc=false;
        $scope.noc=true;
      }
      else{
        no = true;
        yes=false;
        $scope.yesc=false;
        $scope.noc=true;
      }
    }
    $scope.Submit = function(yes, no){
      if (yes==true) {
        $rootScope.score += 200;
        $rootScope.Epilepsy = 1;
      }
      else
        $rootScope.Epilepsy = 0;
      if (yes == true || no == true )
      $state.go('step18');
    }
})


.controller('Step18Ctrl', function($scope, $state,  $http, $rootScope) {
      $scope.data = {};
  $scope.test = 
    url = ""
      $scope.yeschecked = function(yes, no){
      if (yes == false && no == false){
        yes = true;
        no=false;
        $scope.yesc=true;
        $scope.noc=false;
      }
      else if (yes == true && no == false){
        yes = false;
        no=false;
        $scope.yesc=false;
        $scope.noc=false;
      }
      else if (yes == false && no == true){
        yes = true;
        no = false;
        $scope.yesc=true;
        $scope.noc=false;
      }
      else if (yes == true && no == true){
        yes = true;
        no=false;
        $scope.yesc=true;
        $scope.noc=false;
      }
      else{
        yes = true;
        no=false;
        $scope.yesc=true;
        $scope.noc=false;
      }
    }
    $scope.nochecked = function(yes, no){
      if (no == false && yes == false){
        no = true;
        yes=false;
        $scope.yesc=false;
        $scope.noc=true;
      }
      else if (no == true && yes == false){
        no = false;
        yes=false;
        $scope.noc=false;
        $scope.yesc=false;
      }
      else if (no == false && yes == true){
        no = true;
        yes = false;
        $scope.yesc=false;
        $scope.noc=true;
      }
      else if (no == true && yes == true){
        no = true;
        yes=false;
        $scope.yesc=false;
        $scope.noc=true;
      }
      else{
        no = true;
        yes=false;
        $scope.yesc=false;
        $scope.noc=true;
      }
    }
    $scope.Submit = function(yes, no){
      if (yes==true) {
        $rootScope.Phlebitis = 1;
        $rootScope.score += 2;
      }
      else
        $rootScope.Phlebitis = 0;
      if (yes == true || no == true )
      $state.go('step19');
    }
})

.controller('Step19Ctrl', function($scope, $state,  $http, $rootScope) {
      $scope.data = {};
  $scope.test = 
    url = ""
      $scope.yeschecked = function(yes, no){
      if (yes == false && no == false){
        yes = true;
        no=false;
        $scope.yesc=true;
        $scope.noc=false;
      }
      else if (yes == true && no == false){
        yes = false;
        no=false;
        $scope.yesc=false;
        $scope.noc=false;
      }
      else if (yes == false && no == true){
        yes = true;
        no = false;
        $scope.yesc=true;
        $scope.noc=false;
      }
      else if (yes == true && no == true){
        yes = true;
        no=false;
        $scope.yesc=true;
        $scope.noc=false;
      }
      else{
        yes = true;
        no=false;
        $scope.yesc=true;
        $scope.noc=false;
      }
    }
    $scope.nochecked = function(yes, no){
      if (no == false && yes == false){
        no = true;
        yes=false;
        $scope.yesc=false;
        $scope.noc=true;
      }
      else if (no == true && yes == false){
        no = false;
        yes=false;
        $scope.noc=false;
        $scope.yesc=false;
      }
      else if (no == false && yes == true){
        no = true;
        yes = false;
        $scope.yesc=false;
        $scope.noc=true;
      }
      else if (no == true && yes == true){
        no = true;
        yes=false;
        $scope.yesc=false;
        $scope.noc=true;
      }
      else{
        no = true;
        yes=false;
        $scope.yesc=false;
        $scope.noc=true;
      }
    }
    $scope.Submit = function(yes, no){
      if (yes==true){
        $rootScope.HighBloodPresure = 1;
        $rootScope.score += 2;
      }
      else
        $rootScope.HighBloodPresure = 0;
      if (yes == true || no == true )
      $state.go('step20');
    }
})



.controller('Step20Ctrl', function($scope, $state,  $http, $rootScope) {
  $scope.data = {};
  $scope.test = 
    url = ""
      $scope.yeschecked = function(yes, no){
      if (yes == false && no == false){
        yes = true;
        no=false;
        $scope.yesc=true;
        $scope.noc=false;
      }
      else if (yes == true && no == false){
        yes = false;
        no=false;
        $scope.yesc=false;
        $scope.noc=false;
      }
      else if (yes == false && no == true){
        yes = true;
        no = false;
        $scope.yesc=true;
        $scope.noc=false;
      }
      else if (yes == true && no == true){
        yes = true;
        no=false;
        $scope.yesc=true;
        $scope.noc=false;
      }
      else{
        yes = true;
        no=false;
        $scope.yesc=true;
        $scope.noc=false;
      }
    }
    $scope.nochecked = function(yes, no){
      if (no == false && yes == false){
        no = true;
        yes=false;
        $scope.yesc=false;
        $scope.noc=true;
      }
      else if (no == true && yes == false){
        no = false;
        yes=false;
        $scope.noc=false;
        $scope.yesc=false;
      }
      else if (no == false && yes == true){
        no = true;
        yes = false;
        $scope.yesc=false;
        $scope.noc=true;
      }
      else if (no == true && yes == true){
        no = true;
        yes=false;
        $scope.yesc=false;
        $scope.noc=true;
      }
      else{
        no = true;
        yes=false;
        $scope.yesc=false;
        $scope.noc=true;
      }
    }
    $scope.Submit = function(yes, no){
      if (yes==true) {
        $rootScope.diabetesH = 1;
        $rootScope.score += 200;
      }
      else
        $rootScope.diabetesH = 0;
      if (yes == true || no == true )
      $state.go('step21');
    }
})

.controller('Step21Ctrl', function($scope, $state,  $http, $rootScope) {
  $scope.data = {};
  $scope.test = 
  url = ""
  $scope.yeschecked = function(yes, no){
      if (yes == false && no == false){
        yes = true;
        no=false;
        $scope.yesc=true;
        $scope.noc=false;
      }
      else if (yes == true && no == false){
        yes = false;
        no=false;
        $scope.yesc=false;
        $scope.noc=false;
      }
      else if (yes == false && no == true){
        yes = true;
        no = false;
        $scope.yesc=true;
        $scope.noc=false;
      }
      else if (yes == true && no == true){
        yes = true;
        no=false;
        $scope.yesc=true;
        $scope.noc=false;
      }
      else{
        yes = true;
        no=false;
        $scope.yesc=true;
        $scope.noc=false;
      }
    }
    $scope.nochecked = function(yes, no){
      if (no == false && yes == false){
        no = true;
        yes=false;
        $scope.yesc=false;
        $scope.noc=true;
      }
      else if (no == true && yes == false){
        no = false;
        yes=false;
        $scope.noc=false;
        $scope.yesc=false;
      }
      else if (no == false && yes == true){
        no = true;
        yes = false;
        $scope.yesc=false;
        $scope.noc=true;
      }
      else if (no == true && yes == true){
        no = true;
        yes=false;
        $scope.yesc=false;
        $scope.noc=true;
      }
      else{
        no = true;
        yes=false;
        $scope.yesc=false;
        $scope.noc=true;
      }
    }
    $scope.Submit = function(yes, no){
      if (yes==true){
        $rootScope.Medicament= 1;
        $state.go('step22');
      }
      else {
        $rootScope.Medicament= 0;
        $state.go('step23');
      }
    }
})


.controller('Step22Ctrl', function($scope, $state,  $http, $rootScope) {
  $scope.data = {};
  $scope.test = 
  url = ""
  $scope.Submit = function(AntiepilepsyAnswer, AntiCoagulentAnswer, AntiHighBloodAnswer, AntidepressantAnswer, InsulineAnswer){
    $rootScope.AntiepilepsyAnswer = AntiepilepsyAnswer;
    if ($rootScope.AntiepilepsyAnswer == 1)
        $rootScope.score += 200;
    $rootScope.AntiCoagulentAnswer = AntiCoagulentAnswer;
    if ($rootScope.AntiCoagulentAnswer == 1)
        $rootScope.score += 200;
    $rootScope.AntiHighBloodAnswer = AntiHighBloodAnswer;
    if ($rootScope.AntiHighBloodAnswer == 1)
        $rootScope.score += 2;
    $rootScope.AntidepressantAnswer = AntiCoagulentAnswer;
    if ($rootScope.AntidepressantAnswer == 1)
        $rootScope.score += 2;
    $rootScope.InsulineAnswer = InsulineAnswer;
    $state.go('step23');
  }
})

.controller('Step23Ctrl', function($scope, $state, $http, $rootScope){
  $scope.data = {};
  $scope.test = 
  $scope.url = ""
  $scope.nb = function(Size){
    $rootScope.Size = Size;
    $state.go('step24');
  }
})


.controller('Step24Ctrl', function($scope, $state, $http, $rootScope){
  $scope.data = {};
  $scope.test = 
  $scope.url = ""
  $scope.nb = function(Weight){
    $rootScope.Weight = Weight;
    $rootScope.IMC = $rootScope.Weight / Math.pow($rootScope.Size/100, 2);
    if ($rootScope.IMC > 28)
      $rootScope.score += 200;
    else if ($rootScope.IMC > 22)
      $rootScope.score += 20;     
    else if ($rootScope.IMC > 17)
      $rootScope.score += 0;      
    else if ($rootScope.IMC < 17)
      $rootScope.score += 50;     
    $state.go('step25');
  }
})

.controller('Step25Ctrl', function($scope, $state,  $http, $rootScope) {
      $scope.data = {};
  $scope.test = 
    url = ""
    $scope.yeschecked = function(yes, no){
      if (yes == false && no == false){
        yes = true;
        no=false;
        $scope.yesc=true;
        $scope.noc=false;
      }
      else if (yes == true && no == false){
        yes = false;
        no=false;
        $scope.yesc=false;
        $scope.noc=false;
      }
      else if (yes == false && no == true){
        yes = true;
        no = false;
        $scope.yesc=true;
        $scope.noc=false;
      }
      else if (yes == true && no == true){
        yes = true;
        no=false;
        $scope.yesc=true;
        $scope.noc=false;
      }
      else{
        yes = true;
        no=false;
        $scope.yesc=true;
        $scope.noc=false;
      }
    }
    $scope.nochecked = function(yes, no){
      if (no == false && yes == false){
        no = true;
        yes=false;
        $scope.yesc=false;
        $scope.noc=true;
      }
      else if (no == true && yes == false){
        no = false;
        yes=false;
        $scope.noc=false;
        $scope.yesc=false;
      }
      else if (no == false && yes == true){
        no = true;
        yes = false;
        $scope.yesc=false;
        $scope.noc=true;
      }
      else if (no == true && yes == true){
        no = true;
        yes=false;
        $scope.yesc=false;
        $scope.noc=true;
      }
      else{
        no = true;
        yes=false;
        $scope.yesc=false;
        $scope.noc=true;
      }
    }
    $scope.Submit = function(yes, no){
      if (yes==true){
        $rootScope.Work= 1;
        $state.go('step26');
      }
      else {
        $rootScope.Work= 0;
      if (yes == true || no == true )
        $state.go('step0');
      }
    }
})

.controller('Step26Ctrl', function($scope, $state, $http, $rootScope){
  $scope.data = {};
  $scope.test = 
  $scope.url = ""
  $scope.nb = function(NbWork){
    $rootScope.NbWork = NbWork;
    if ($rootScope.NbWork > 10)
      $rootScope.score += 2;      
    
    $state.go('step27');
  }
})

.controller('Step27Ctrl', function($scope, $state, $http, $rootScope){
  $scope.data = {};
  $scope.test = 
  $scope.url = ""
  $scope.nb = function(TimeTravel){
    $rootScope.TimeTravel = TimeTravel;
    if ($rootScope.TimeTravel > 90)
      $rootScope.score += 2;      
    $state.go('step28');
  }
})

.controller('Step28Ctrl', function($scope, $state, $http, $rootScope){
  $scope.data = {};
  $scope.test = 
  $scope.url = ""
  $scope.yeschecked = function(yes, no){
      if (yes == false && no == false){
        yes = true;
        no=false;
        $scope.yesc=true;
        $scope.noc=false;
      }
      else if (yes == true && no == false){
        yes = false;
        no=false;
        $scope.yesc=false;
        $scope.noc=false;
      }
      else if (yes == false && no == true){
        yes = true;
        no = false;
        $scope.yesc=true;
        $scope.noc=false;
      }
      else if (yes == true && no == true){
        yes = true;
        no=false;
        $scope.yesc=true;
        $scope.noc=false;
      }
      else{
        yes = true;
        no=false;
        $scope.yesc=true;
        $scope.noc=false;
      }
    }
    $scope.nochecked = function(yes, no){
      if (no == false && yes == false){
        no = true;
        yes=false;
        $scope.yesc=false;
        $scope.noc=true;
      }
      else if (no == true && yes == false){
        no = false;
        yes=false;
        $scope.noc=false;
        $scope.yesc=false;
      }
      else if (no == false && yes == true){
        no = true;
        yes = false;
        $scope.yesc=false;
        $scope.noc=true;
      }
      else if (no == true && yes == true){
        no = true;
        yes=false;
        $scope.yesc=false;
        $scope.noc=true;
      }
      else{
        no = true;
        yes=false;
        $scope.yesc=false;
        $scope.noc=true;
      }
    }
    $scope.Submit = function(yes, no){
      if (yes==true) {
        $rootScope.StandingWork = 1;
        $rootScope.score += 2;
      }
      else
        $rootScope.StandingWork = 0;
      if (yes == true || no == true )
      $state.go('step0');
    }
})



.controller('Step0Ctrl', function($scope, $state, $http, $rootScope) {
      $scope.data = {};
  $scope.test = 
    url = ""
    if ($rootScope.PregnantGood == 1) {
      $scope.ProfilPregnant = "Félicitation vous êtes enceinte !";
    }
    else if ($rootScope.Pregnant == 1){
     $scope.ProfilPregnant = "Vous avez le choix de l' IVG , prenez le temps de la réflexion, et pour se faire surfez sur www.ivg.org ."; 
    }
    if ($rootScope.score >= 200) {
      $scope.resultProfil = "D'après vos réponse vous présentez une grossesse à haut et devez être suivi dans une maternité de type 3.";
    }   
    else if ($rootScope.score >= 50) {
      $rootScope.resultProfil = "D'apres vos réponse vous présentez une grossesse à haut risque mais qui ne necessite pas un suivi dans une maternité de type 3";
    }
    else if ($rootScope.score >= 20) {
      $rootScope.resultProfil = "D'apres vos réponses vous présentez une grossesse à risque ";
    }
    else {
      $rootScope.resultProfil = "D'apres vos réponses vous ne présentez pas de risque particulier pour votre grossesse";
    }
    if ( $rootScope.Age < 35 ){
      $scope.profil = $rootScope.RAgeA;
    }
    else if ( $rootScope.Age < 38 ){
      $scope.profil = $rootScope.RAgeB;
    }
    else if ( $rootScope.Age < 42 ){
      $scope.profil = $rootScope.RAgeC;
    }
    else if ( $rootScope.Age >= 42 ){
      $scope.profil = $rootScope.RAgeD; 
    }
    
    if ($rootScope.Pregnant == 1 && $rootScope.Smoke == 1){
      $scope.profil = $rootScope.RSmokeA;
    }
    else if ($rootScope.Smoke == 1){
      $scope.profil = $rootScope.RSmokeB;
    }

    if ($rootScope.BigChild == 1)
      $rootScope.profil += $rootScope.BigChildAnswer;

    if ($rootScope.Prema == 0)
      $rootScope.profil += $rootScope.PremaNo;
    

    if ($rootScope.NbCesa >= 2)
      $rootScope.profil += $rootScope.NbCesaAnswer;

    if ($rootScope.NbMiacarriage >= 3)
      $rootScope.profil += $rootScope.NbMiacarriageAnswer;

    if ($rootScope.IMG == 1)
      $rootScope.profil += $rootScope.IMGYesAnswer;

    if ($rootScope.Alcool < 10 && $rootScope.Alcool > 0){
      $scope.profil += $rootScope.AlcoolAnswerHighoZero;
    }
    else if ($rootScope.Alcool >= 10){
      $scope.profil += $rootScope.AlcoolAnswerHighoTen;
    }

    if ($rootScope.Epilepsy == 1)
      $scope.profil += $rootScope.EpilepsyAnswer;

    if ($rootScope.Phlebitis == 1)
      $scope.profil += $rootScope.PhlebitisAnswer;

    if ($rootScope.HighBloodPresure == 1)
      $scope.profil += $rootScope.HighBloodPresureAnswer;
    if ($rootScope.diabetesH == 1)
      $scope.profil += $rootScope.diabetesHAnswer;

    if ($rootScope.IMC < 17){
      $scope.profil += $rootScope.IMCLessAnswer;
    }
    else if ($rootScope.IMC > 22 && $rootScope.diabetesH == 1) {
      $scope.profil += "surpoid+diabete";
    }
    else if ($rootScope.IMC > 22 && $rootScope.IMC <= 28){
      $scope.profil += $rootScope.IMCHighAnswer;
    }
    else if ($rootScope.IMC > 28){
      $scope.profil += $rootScope.IMCMoreHighAnswer;
    }

    if ($rootScope.Work == 1){
      if ($rootScope.NbWork > 10 && $rootScope.NbWork <= 12){
        $scope.profil += $rootScope.NbWorkTenAnswer;
      }
      else if ($rootScope.NbWork > 12){
        $scope.profil += $rootScope.NbWorkTwelveAnswer;
      }
      if ($rootScope.TimeTravel > 90){
        $scope.profil += $rootScope.TimeTravelAnswer;
      }
      if ($rootScope.StandingWork == 1){
        $scope.profil += $rootScope.StandingWorkAnswer;
      }
    }
    else{
      $scope.profil += $rootScope.WorkNoAnswer;
    }

    
    $scope.continue = function() {
        $state.go('app.launch');
      }
})
.controller('CongratsCtrl', function($scope, $state, $http, $rootScope){
  $scope.data = {};
  $scope.test = 
  $scope.url = ""
  $scope.submit = function(){

  }
})
.controller('HomeCtrl', function($scope, $state, $http, $rootScope) {
    $scope.data = {};
  $scope.test = 
    url = ""
       
    $scope.continue = function() {
        $state.go('app.launch');
      }
    $scope.login = function() {
      $state.go('app.launch');
    }
    $scope.create = function() {
      $state.go('step1');
    }
    $scope.french = function(){
      $state.go('step1');
    }
      $rootScope.langage = 1;
      //home
      $rootScope.account = "Je possède déjà un compte";
      $rootScope.begin = "Commençons l'aventure!";

      // launch
      $rootScope.hello = "Bonjour, aujourd\'hui vous en êtes à votre ";
      $rootScope.numberOfWeek = "ème semaine de grossesse";

      $rootScope.helloFirst = "Vous avez choisi de continuer votre aventure avec nous et nous vous en remercions.";
      
      //Bilan Gratuit
      $rootScope.HelloFree = " Bonjour "; 
      $rootScope.QAge = "Quel âge avez vous ?";
      $rootScope.RAgeA = "Vous présentez un faible risque d'anomalie chromosomique foetale.";
      $rootScope.RAgeB = "Vous présentez un risque modéré d'anomalie chromosomique foetale.";
      $rootScope.RAgeC = "Vous présentez un risque élevé d'anomalie chromosomique foetale.";
      $rootScope.RAgeD = "Vous présentrez un risque très élevé d'anomalie chromosomique foetale.";

      $rootScope.QPregnant = "Etes vous enceinte?";
      $rootScope.Pregnant = "Félication !";

      $rootScope.QSmoke = "Fumez-vous?";
      $rootScope.RSmokeA = "Vous devez vous fixer l'objectif d'arrêter de fumer !";
      $rootScope.RSmokeB = "Vous devez vous fixer l'objectif d'arrêter de fumer !";

      $rootScope.QChild = "Avez-vous des enfants?";

      $rootScope.QHChild = "Combien?";

      $rootScope.QBigChild = "Avez-vous accouché d'un enfant de plus de 4 kilos ? ";
      $rootScope.BigChildAnswer = "Vous devrez effectuer un dépistage du diabète de grossesse dès le premier trimestre";

      $rootScope.QLessChild = "Avez-vous accouché d'un enfant de moins de 2kg200 ?";

      $rootScope.QPrema = "Votre enfant était il prématuré ?";
      $rootScope.PremaNo =  "Il s'agit donc d'un antécédent de retard de croissance intra-utérin qui vous expose à un risque de récidive d'environ 10 % pour la prochaine grossesse (si la femme a répondu pas encore enceinte) pour cette grossesse (si la dame a répondu oui je suis déjà enceinte)";

      $rootScope.QPreEclamp = "Avez-vous eu une pré-éclampsie ? ";

      $rootScope.QPregnantDiabete = "Avez-vous un diabète de grossesse (diabète gestationnel) ?";

      $rootScope.QNbCesa = "Combien de césarienne avez-vous eu ?";
      $rootScope.NbCesaAnswer = "Le mode d'accouchement le plus probable pour cette grossesse sera donc la césarienne.";

      $rootScope.QMiscarriage = "Avez-vous fait des fausses couches ?";

      $rootScope.QNbMiscarriage = "Combien de fausse couche avez-vous fait ?";
      $rootScope.NbMiacarriageAnswer = "Vous devez effectuer un bilan de fausse couche à répétition et bénéficier d'une prise en charge adaptée en fonction des résultats de ce bilan.";

      $rootScope.QIMG = "Avez-vous fait une ou des IMG ?";
      $rootScope.IMGYesAnswer = "Nous vous conseillons une consultation spécialisée afin d'évaluer le risque de récidive de malformation foetale.";

      $rootScope.QAlcool = "Combien de verres d'alcool buvez-vous par semaine ?";
      $rootScope.AlcoolAnswerHighoZero = "Pendant la grossesse la seule façon de protéger votre foetus est de stopper toute consommation d'alcool.";

      $rootScope.AlcoolAnswerHighoTen = "Vous avez peut être un problème de dépendance avec l'alcool, nous vous conseillons une consultation spécialisée afin de faire le point.";

      $rootScope.QEpilepsy = "Avez-vous une épilepsie ? ";
      $rootScope.EpilepsyAnswer = "A cause de votre épilepsie, vous présentez une grossesse à risque. Vous devez être prise en charge par une équipe spécialisée pour le choix des antiépileptiques et leur dosage ainsi que pour la mise en place d'une surveillance foetale adaptée.";

      $rootScope.QPhlebitis = "Avez-vous déjà eu une phlébite ?";
      $rootScope.PhlebitisAnswer = "Votre condition de femme enceinte augmente votre risque de récidive de phlébite et ce jusqu'à 6 semaines après l'accouchement. Vous devez porter des bas de contention durant toute la grossesse et les 6 semaines après l'accouchement. Il peut être nécessaire de vous prescrire de l'héparine durant la grossesse et ou après l'accouchement. Vous devrez en discuter avec votre gynécologue.";

      $rootScope.QHighBloodPresure = "Avez-vous de l'hypertension artérielle ?";
      $rootScope.HighBloodPresureAnswer = "A cause de votre hypertension, vous présentez une grossesse à risque. Vous devez être prise en charge par une équipe spécialisée pour le choix des antihypertenseurs et leur dosage ainsi que pour la mise en place d'une surveillance foetale adaptée.";

      $rootScope.QdiabetesH = "Avez-vous du diabète ?";
      $rootScope.diabetesHAnswer = "A cause de votre diabète, vous présentez une grossesse à risque. Vous devez être prise en charge par une équipe spécialisée pour le choix des antidiabetiques et leur dosage ainsi que pour la mise en place d'une surveillance foetale adaptée.";

      $rootScope.QMedicament = "Prennez-vous des médicaments ?";

      $rootScope.QTypeMedicament = "Selectionnez les médicaments que vous prennez ";
      $rootScope.EpileptiqueMed = "Anti-Epileptique";
      $rootScope.AntiCoagulentMed = "Anticoagulent";
      $rootScope.AntiHighBloodMed = "Antihypertenseur";
      $rootScope.InsulineMed = "Insuline";
      $rootScope.AntiDepressantMed = "Antidepresseur";

      $rootScope.QSize = "Quelle est votre taille ?";

      $rootScope.QWeight = "Quel est votre poids ?";

      $rootScope.IMCLessAnswer =  "Votre sous poids vous expose à un risque de menace d'accouchement prématuré et de bébé avec un retard de croissance intra-utérin.";
      $rootScope.IMCHighAnswer =  "Votre poids vous expose à un risque de diabète pendant la grossesse et donc de gros bébé à terme.";
      $rootScope.IMCMoreHighAnswer = "Votre surpoids vous expose à un risque important de diabète, de malformation foetale. Votre accouchement peut être compliqué par une phlébite ou une embolie pulmonaire en particulier si il a eu lieu par césarienne.";

      $rootScope.QWork = "Travaillez-vous ?";
      $rootScope.WorkNoAnswer = "Vous ne travaillez pas, profitez-en pour prendre le temps de prendre soin de vous, de préparer vous même vos repas, organiser votre préparation à l'accouchement et la venue de votre bébé.";

      $rootScope.QNbWork = "Combien d'heures de travail effectuez-vous par jour ?";
      $rootScope.NbWorkTenAnswer = "Vos heures de présence au travail sont élevées.";
      $rootScope.NbWorkTwelveAnswer = "Vos heures de présence au travail sont très élevées, vous devez essayer d'aménager vos heures de présence au travail, ce qui sera de toute façon indispensable lorsque votre bébé sera né :-).";

      $rootScope.QTimeTravel = "Quel est votre temps de trajet par jour (en minute) ?";
      $rootScope.TimeTravelAnswer =  "Votre temps de transport est très élevé, vous devez essayer d'aménager vos heures de présence au travail, ce qui sera de toute façon indispensable lorsque votre bébé sera né :-)." ;

      $rootScope.QStandingWork = "Travaillez-vous debout plus de 6 heures par jour ? ";
      $rootScope.StandingWorkAnswer = "Vous risquez d'être en difficulté pour mener votre grossesse à terme sans vous épuiser et sans menace d'accouchement prématuré. Il serait utile de discuter dès à présent avec votre employeur d'aménager vos conditions de travail.";

      //Calendar Medical
      $rootScope.NumberCalendar = "Félicitation vous en êtes à votre ";
      $rootScope.Weeks = "eme semaines de grossesse aujourd'hui !";
      $rootScope.delivery = "Vous devriez accoucher le ";
      $rootScope.calendar = "Votre calendrier";

      $rootScope.DateOfMenstruation = "Commencez par rentrer la date de vos dernieres regles";

      $rootScope.LastM = "La date de vos dernieres règles est le:";
      $rootScope.LastMenstruationDetail = "L'aménorrhée signifie l'absence de règles. Les professionnels de santé calculent le stade d'évolution de la grossesse en semaines d'aménorrhée à partir du premier jour des dernières règles. ";

      $rootScope.BeginOfP = "Votre Grossesse a débuté le:";
      $rootScope.BeginOfPregnancyDetail = "Cette date sera déterminée avec précision par votre médecin à partir des résultats de la 1ère échographie et de la date de vos dernières règles.";

      $rootScope.ReliabilityT = "Fiabilité du test de grossesse à partir du:";
      $rootScope.ReliabilityTPast = "Fiabilité du test de grossesse depuis le:";
      $rootScope.ReliabilityTestDetail = "Il est recommandé de confirmer les résultats du test de grossesse par une prise de sang en laboratoire, afin de mesurer avec plus de précision le taux d'hormone hCG.";
      
      $rootScope.FirstC = "Votre première consultation doit être réalisé entre le ";
      $rootScope.FirstCPast = "Votre première consultation à été réalisé le inserer la date quand on stock les données";
      $rootScope.FirstConsultDetail = "Votre grossesse est suivie par un médecin ou une sage-femme (libérale, en hôpital ou en PMI). A ce titre, vous bénéficiez de 7 consultations médicales prénatales. Lors de la 1ère consultation, vous allez établir les principales étapes de votre suivi de grossesse. Il est nécessaire de retracer avec votre médecin votre passé médical.";

      $rootScope.FirstE = "Votre première echographie doit être réalisé entre le ";
      $rootScope.FirstEPast = "Votre première echographie à été réalisé le ";
      $rootScope.FirstEchoDetail = "L'échographie de datation doit être réalisée entre la 11ème et la 13ème semaine d'aménorrhée. Elle permet de confirmer le terme de la grossesse, de déterminer le nombre d'embryons, de mesurer la clarté nucale et de rechercher certains signes de malformation. ";
      
      $rootScope.FirstPC = "Votre premier entretien prenatal doit être réalisé entre le ";
      $rootScope.FirstPCPast = "Votre premiere entretien prenatal à été réalisé le ";
      $rootScope.FirstPrenatalCareDetail = "Cet entretien individuel ou en couple est réalisé par une sage-femme ou un médecin et permet d'exprimer vos besoins et vos attentes, de répondre à vos interrogations et d'échanger sur votre projet de naissance.";

      $rootScope.SecondPC = "Votre second entretien prenatal doit être réalisé entre le ";
      $rootScope.SecondPCPast = "Votre second entretien prenatal à été réalisé le";
      $rootScope.SecondPrenatalCareDetail = "Votre médecin peut vous proposer d'effectuer le Triple Test, il s'agit d'un examen médical non obligatoire qui permet de dépister la trisomie 21 par le biais d'un dosage de marqueurs effectué sur votre sang. Si vous avez plus de 38 ans, il vous sera systématiquement proposé d'effectuer une amiocentèse. Votre médecin peut également vous recommander deffectuer un examen médical du père - cet examen pris en charge à 100% a pour objectif de compléter votre dossier médical.";

      $rootScope.BilanB = "Bilan buccodentaire";
      $rootScope.BilanBuccoDetail = "Vous pouvez bénéficier d'un bilan bucco-dentaire pris en charge à 100% et sans avance de frais de votre part. Prenez soin de vos dents car les modifications hormonales notamment peuvent fragiliser vos dents et vos gencives, ce qui peut augmenter le risque d'accouchement prématuré.";
      
      $rootScope.SecondE = "Votre seconde echographie doit être réalisé entre le ";
      $rootScope.SecondEPAst = "Votre seconde echographie à été réalisé le ";
      $rootScope.SecondEchoDetail = "L'échographie morphologique doit être réalisée entre la 21ème et la 23ème semaine d'aménorrhée. Elle permet d'analyser la morphologie du foetus, de vérifier la croissance foetale, de localiser le placenta et de dépister d'autres anomalies. Vous pouvez, si vous le souhaitez, connaître le sexe de votre bébé !";

      $rootScope.ThirdPC = "Votre troisième entretien prenatal doit être réalisé entre le ";
      $rootScope.ThirdPCPast = "Votre troisième entretien prenatal à été réalisé le ";
      $rootScope.ThirdPrenatalCareDetail = "Votre médecin interprète et vous explique l'échographie morphologique.";

      $rootScope.diabete = "Votre depistage diabete doit être réalisé entre le ";
      $rootScope.diabetePast = "Votre depistage diabete à été réalisé le ";
      $rootScope.diabetePregnant = "Le diabète gestationnel également appelé hyperglycémie ou diabète de grossesse, est une élévation du taux de sucre dans le sang qui survient pendant la grossesse. Il s'agit d'une forme bénigne de diabète qui concerne entre 6% et 12% des grossesses et nécessite la mise en place d'un suivi adapté.";

      $rootScope.FourPC = "Votre quatrieme entretien prenatal doit être réalisé entre le ";
      $rootScope.FourPCPast = "Votre quatrieme entretien prenatal à été réalisé le ";
      $rootScope.FourPrenatalCareDetail = "Consultation médicale de votre 6ème mois de grossesse.";
    
      $rootScope.FivePC = "Votre cinquieme entretien prenatal doit être réalisé entre le ";
      $rootScope.FivePCPast = " Votre cinquieme entretien prenatal à été réalisé le ";
      $rootScope.FivePrenatalCareDetail = "Consultation médicale de votre 7ème mois de grossesse.";

      $rootScope.ThirdE = "Votre troisieme echographie doit être réalisé entre le ";
      $rootScope.ThirdEPast = "Votre troisieme echographie à été réalisé le";
      $rootScope.ThirdEchoDetail = "L'échographie de croissance foetale doit être réalisée entre la 31ème et la 33ème semaine d'aménorrhée. Elle permet de vérifier la croissance foetale, la présentation et la localisation placentaire.";

      $rootScope.SixthPC = "Votre sixieme entretien prenatal doit être réalisé entre le ";
      $rootScope.SixthPCPast = " Votre sixieme entretien prenatal à été réalisé le ";
      $rootScope.SixthPrenatalCareDetail = "Votre médecin interprète et vous explique l'échographie de croissance. C'est également l'occasion pour lui de vous informer sur votre mode d'accouchement.";

      $rootScope.AnesthetistC = "Votre consultation avec l'anesthesiste doit être réalisé entre le ";
      $rootScope.AnesthetistCPast = " Votre consultation avec l'anesthesiste à été réalisé le ";
      $rootScope.AnesthetistConsultDetail = "Cette consultation permet d'assurer la sécurité d'une éventuelle anesthésie et est obligatoire.";

      $rootScope.SeventhPC = "Votre septieme entretien prenatal doit être réalisé entre le ";
      $rootScope.SeventhPCPast = " Votre septieme entretien prenatal à été réalisé le ";
      $rootScope.SeventhPrenatalCareDetail = "Votre médecin vous confirmera le lieu et les modalités de votre accouchement. Il vous informera également des différents signes qui doivent attirer votre attention et vous faire venir à la maternité en urgence (contractions, perte de liquide, perte de sang, etc.)";

      $rootScope.DateOfT = "Votre date de terme théorique est le: " 
      $rootScope.DateOfTermDetail = "Vous devez consulter votre médecin ou sage-femme.";
      
      $rootScope.PregnantPC = "Vous devez effectuer votre déclaration de grassesse avant le ";
      $rootScope.PregnantPCPast = "Vous avez effectuer votre déclaration de grossesse le ";
      $rootScope.PregnantDeclarationDetail = "Demandez à votre gynécologue ou votre sage femme de remplir votre déclaration de grossesse. Remplissez ensuite votre partie.  Adressez le volet rose à la Caisse d'Allocations Familiales et le volet bleu à votre organisme d'assurance-maladie avant le [.... calcul de date à J+106 au plus tard.] Cela permet le remboursement des soins à 100% et le déclenchement de votre congé de maternité. En cas de litige, cela permet également de faire valoir vos droits et votre protection au travail. Enfin, pensez à mettre à jour votre carte vitale ! ";
      
      $rootScope.EmployerInformationPC = "Information Employeur N/A";
      $rootScope.EmployerInformationDetail = "Aucune obligation légale, mais cela est utile notamment si un aménagement de votre temps de travail s'avère nécessaire";

      $rootScope.YourMaternityPC = "Vous devez choisir votre maternité avant le ";
      $rootScope.YourMaternityPCPast = "Vous avez effectué votre choix de maternité le ";
      $rootScope.YourMaternityDetail = "Il est recommandé de s'inscrire dans une maternité le plus tôt possible. Vous avez le choix entre les hôpitaux publics ou les cliniques privées (conventionnées ou non). Pensez à vous renseigner auprès de votre complémentaire santé sur la prise en charge de votre séjour en maternité. Il existe trois types de maternité : Type I (adapté à la plupart des accouchements) qui accueillent tous les enfants de poids normal et non prématurés.  Type II (comporte une unité de néonatalogie) et prend en charge les enfants à partir de 32 SA et 1,5kg, Type III (comporte une unité de néonatalogie et un service de réanimation néonatale) et prend en charge les enfants à partir de 25 SA et de 500g. ";

      $rootScope.childcarInformationPC = "Renseignement sur les mode de de gardes";
      $rootScope.childcarInformationDetail = "En collectivité publique ou privé, auxiliaire parentale ou profesionnelle, avec un ou 2 autres enfants, en garde partagée, seul à la maison ou chez une nourrice aggrée. De nombreux choix s'offrent à vous.";

      $rootScope.InformationAidPC = "Renseignement sur les aides: Prestation d'acceuil du jeune enfant (PAJE) / Allocation parent isolé";
      $rootScope.InformationAidDetail = "Nous vous invitons à consulter le site : www.caf.fr";

      $rootScope.VitaleCardPC = "Vous pouvez mettre à jour votre carte vital à partir du ";
      $rootScope.VitaleCardPCPast = "Vous avez mis à jour votre carte vital le ";
      $rootScope.VitalCardDetail = "Pensez à mettre à jour votre carte vitale afin que vos dépenses de santé soient prises en charge à 100% à partir du 1er jour du 6e mois et jusqu'à 12 jours après votre accouchement.";

      $rootScope.PaternityRecognitionPC = " Vous pouvez effectuer la Reconnaissance de paternité à parir du ";
      $rootScope.PaternityRecognitionPCPast = "Vous pouvez effectuer la reconnaissance de paternité depuis le ";
      $rootScope.PaternityRecognitionDetail = "Cette démarche concerne exclusivement les couples non mariés. Cela permet au père de l'enfant d'être reconnu comme tel par l'adminstration. ";
      
      $rootScope.MaternityLeavePC = "Votre congé maternité ";
      $rootScope.MaternityLeaveDetail = "Pour une femme salariée : début du congé prénatal qui commence à la 35e SA (soit 6 semaines avant l'accouchement) s'il s'agit du premier ou deuxième enfant, le congé postnatal dure 10 semaines : soit un congé maternité de 16 semaines en tout. Le congé prénatal débute à la 33e SA (8 semaines avant) s'il s'agit du 3ème enfant, le congé postnatal dure 18 semaines : soit un congé maternité de 26 semaines en tout. Le congé prénatal débute à la 29e SA (12 semaines avant) s'il s'agit de jumeaux, le congé postnatal dure 22 semaines : soit un congé maternité de 34 semaines en tout. Le congé prénatal débute à la 17e SA (24 semaines avant) s'il s'agit de triplés ou plus, le congé postnatal dure 22 semaines : soit un congé maternité de 46 semaines en tout. Pour une femme en profession libérale : le congé maternité dure 16 semaines en tout.";

      $rootScope.InscriptionNurseryPC = "Vous pouvez effectuer l'inscription sur la liste d'une crèche à partir du ";
      $rootScope.InscriptionNurseryPCPast = "Vous pouvez effectuer l'inscription sur la liste d'une crèche depuis le ";
      $rootScope.InscriptionNurseryDetail = "N'hésitez pas à demander une attestation de grossesse à votre gynécologue ou votre sage femme et n'oubliez pas de reconfirmer votre inscription à la naissance de votre enfant.";

      $rootScope.MaternityInsurancePC = "Mon régime d'assurance maladie ";
      $rootScope.MaternityInsuranceDetail = "L'assurance maternité prend en charge à 100% (sur la base du tarif de la SS) : les 7 consultations prénatales et la consultation postnatale obligatoires,  l'entretien prénatal et les 7 séances de préparation à la naissance, les honoraires de l'accouchement, les frais de séjour à l'hôpital ou en clinique conventionnée (dans la limite de 12 jours), tous les soins en lien avec la grossesse à partir du 1er jour du 6ème mois de grossesse, l'hospitalisation éventuelle du nouveau-né au cours de ses 30 premiers jours de vie et l'échographie de 32 SA. Les échographies de 12 et 22 SA  sont remboursées à 70%.";
      
      $rootScope.DeadlineAirTravelPC = "Vous pouvez voyager en avion jusqu'au ";
      $rootScope.DeadlineAirTravelPCPast = "Vous ne pouvez plus voyager en avion depuis le ";
      $rootScope.DeadlineAirTravelDetail = "";
      
      $rootScope.DeclarationBirthPC = "Declaration de naissance";
      $rootScope.DeclarationBirthDetail = "A faire en mairie dans les 3 jours ouvrables de votre accouchement. Ce délai devrait passer à 5 jours ouvrables courant 2017.";

      $rootScope.BirthRegistrationPC = "Déclaration de naissance auprès des organismes (caisse d'assurance maladie, mutuelle, etc.)";
      $rootScope.BirthRegistrationDetail = "Pensez à mettre à jour votre carte Vitale et à renvoyer votre imprimé de rattachement rempli à votre caisse d'assurance maladie.";
      
      $rootScope.EndMaternityLeavePC = "Fin de votre congé maternité";
      $rootScope.EndMaternityLeaveDetail = " Si vous allaitez, sachez qu'il n'existe pas de congé allaitement mais vous avez le droit de vous libérer une heure par jour pour allaiter votre enfant. Cette heure n'est généralement pas rémunérée. Vous pouvez vous renseigner auprès de votre employeur.";
      
      $rootScope.PaternityLeavePC = "Congé Paternité";
      $rootScope.PaternityLeaveDetail = "Le père peut prendre un congé paternité. Afin d'en bénéficier, il doit en faire la demande à son employeur au moins un mois avant la date souhaitée du début de congé. Sa durée est de 11 jours consécutifs (y compris samedis, dimanches et jours fériés) pour un enfant ou de 18 jours pour une naissance multiple. Le congé doit débuter dans les 4 mois suivant la naissance de l'enfant mais peut être reporté en cas d'hospitalisation de l'enfant. Ce congé s'ajoute aux 3 jours accordés par l'employeur lors de la naissance de l'enfant. ";
      

      // Toxo
      $rootScope.QToxo = "Etes-vous immunisé contre la toxoplasmose?";

      //Menu
      $rootScope.Menu = "Menu";
      $rootScope.MCalendar = "Calendrier médical";
      $rootScope.ACalendar = "Calendrier Administratif";
      $rootScope.ECalendar = "Examen Biologique";
      $rootScope.MPsycho = "Psycho";
      $rootScope.MToday = "Aujourd'hui";
      $rootScope.MToxo = "Toxoplasmose";


      // Divers
      $rootScope.And = " et le ";
      $rootScope.ToxoYes = "Oui";
      $rootScope.ToxoNo = "Non";
      $rootScope.ToxoIDontKnow = "Je ne sais pas";
      $rootScope.CreateAccount = "Créer un compte"; 
      $rootScope.OK = "OK";
      $rootScope.Yes = "Oui";
      $rootScope.No = "Non";
      $rootScope.ModifDatePregnant = "Bonjour, rentrer votre date de début de grossesse corrigé"
      $rootScope.DeliveryDatePregnant = "Rentrez votre date d'accouchement";

    $scope.english = function(){
      $rootScope.langage = 2;
      //home
      $rootScope.account = "I already have an account";
      $rootScope.begin = "Start adventure";
      
      //Launch
      $rootScope.hello = "Hello, today you are at your ";
      $rootScope.numberOfWeek = "Th week of pregnancy"
      $rootScope.helloFirst = "You have chosen to continue your adventure with us and we thank you for it. ";

      //Bilan Gratuit
      $rootScope.HelloFree = " Hello "; 
      $rootScope.QAge = "How old are you?";
      $rootScope.RAgeB = "You have a moderate risk of fetal chromosomal abnormality.";
      $rootScope.RAgeC = "You have a high risk of fetal chromosomal abnormality.";
      $rootScope.RAgeD = "You have a very high risk of fetal chromosomal abnormality.";

      $rootScope.QPregnant = "Are you pregnant?";
      $rootScope.Pregnant = "Congratulations !";

      $rootScope.QSmoke = "Do you smoke?";
      $rootScope.RSmokeA = "Smoking during pregnancy is likely to cause complications for the fetus";
      $rootScope.RSmokeB = "Smoking increases the risk of infertility, miscarriage, ectopic pregnancy, preterm delivery, intrauterine growth retardation, and sudden infant death syndrome";

      $rootScope.QChild = "Do you have children?";

      $rootScope.QHChild = "How many?";

      $rootScope.QBigChild = "Did you give birth to a child over 4 kilograms?";     $rootScope.BigChildAnswer = "Vous devrez effectuer un dépistage du diabète de grossesse dès le premier trimestre";

      $rootScope.QLessChild = "Have you given birth to a child under 2kg200?";

      $rootScope.QPrema = "Was your child premature?";
      $rootScope.PremaNo =  "This is a history of intrauterine growth retardation which exposes you to a risk of recurrence of about 10% for the next pregnancy (if the woman has not yet been pregnant) for this pregnancy (if Lady answered yes I am already pregnant) ";

      $rootScope.QPreEclamp = "Have you had a preeclampsia?";

      $rootScope.QPregnantDiabete = "Do you have pregnancy diabetes (gestational diabetes)?";

      $rootScope.QNbCesa = "How many caesarean sections have you had?";
      $rootScope.NbCesaAnswer = "The most likely mode of delivery for this pregnancy will be the caesarean section.";

      $rootScope.QMiscarriage = "Did you miscarry?";

      $rootScope.QNbMiscarriage = "How many miscarriages have you done?";
      $rootScope.NbMiacarriageAnswer = "You must carry out a repeat miscarriage assessment and receive appropriate care according to the results of this assessment.";

      $rootScope.QIMG ="Have you done one or more IMGs?";
      $rootScope.IMGYesAnswer = "We recommend a specialized consultation to assess the risk of recurrence of fetal malformation.";

      $rootScope.QAlcool ="How many glasses of alcohol do you drink per week?";
      $rootScope.AlcoolAnswerHighoZero = "During pregnancy the only way to protect your fetus is to stop all alcohol consumption.";
      $rootScope.AlcoolAnswerHighoTen = "You may have an addiction problem with alcohol, we advise you to have a specialized consultation in order to take stock.";

      $rootScope.QEpilepsy = "Do you have epilepsy?";
      $rootScope.EpilepsyAnswer = "Because of your epilepsy, you have a risky pregnancy. You have to be taken care of by a specialized team for the choice of anti-epileptics and their dosage and for the setting up of a suitable fetal monitoring.";
      $rootScope.QPhlebitis = "Have you ever had a phlebitis?";
      $rootScope.PhlebitisAnswer = "Your condition as a pregnant woman increases your risk of recurrence of phlebitis until 6 weeks after delivery, and you should wear compression stockings throughout pregnancy and 6 weeks after delivery. You should prescribe heparin during pregnancy and / or after delivery and discuss it with your gynecologist. ";

      $rootScope.QHighBloodPresure = "Do you have high blood pressure?";
      $rootScope.HighBloodPresureAnswer = "A cause de votre hypertension, vous présentez une grossesse à risque. Vous devez être prise en charge par une équipe spécialisée pour le choix des antihypertenseurs et leur dosage ainsi que pour la mise en place d'une surveillance foetale adaptée.";

      $rootScope.QdiabetesH = "Avez-vous du diabète ?";
      $rootScope.diabetesHAnswer = "Because of your diabetes, you have a risky pregnancy. You have to be taken care of by a specialized team for the choice of antidiabetics and their dosage as well as for the setting up of a suitable fetal monitoring.";

      $rootScope.QMedicament = "Do you take medicine?";

      $rootScope.QTypeMedicament = "Select medicines you take";
      $rootScope.EpileptiqueMed = "Anti-Epileptic";
      $rootScope.AntiCoagulentMed = "Anticoagulant";
      $rootScope.AntiHighBloodMed = "Antihypertensive";
      $rootScope.InsulineMed = "Insulin";
      $rootScope.AntiDepressantMed = "Antidepressant";

      $rootScope.QSize = "What is your size ?";

      $rootScope.QWeight = "What is your weight ?";

      $rootScope.IMCLessAnswer =  "Your leanness exposes you to a risk of threatening preterm delivery and baby with intrauterine growth retardation.";     
      $rootScope.IMCHighAnswer =  "Your overweight exposes you to a risk of diabetes during pregnancy and therefore big baby in the long run.";
      $rootScope.IMCMoreHighAnswer = "Your significant obesity exposes you to a very high risk of diabetes, fetal malformation, phlebitis or even pulmonary embolism, as well as difficulty giving birth including caesarean section.";

      $rootScope.QWork = "Do you work?";
      $rootScope.WorkNoAnswer = "Take advantage of it to take the time to take care of yourself, prepare yourself your meals, organize your preparation for the birth and the arrival of your baby.";

      $rootScope.QNbWork = "How many hours do you work per day?";
      $rootScope.NbWorkTenAnswer = "Your hours at work are high.";
      $rootScope.NbWorkTwelveAnswer = "Your hours of presence at work are very high, we propose to arrange your hours of presence at work, which will in any case be essential when your baby will be born :-).";

      $rootScope.QTimeTravel = "What is your journey time per day (in minutes)?";
      $rootScope.TimeTravelAnswer =  "Your transport time is very high, we offer to arrange your hours of presence at work, which will in any case be essential when your baby will be born :-)." ;

      $rootScope.QStandingWork = "Do you work more than 6 hours a day?";
      $rootScope.StandingWorkAnswer = "You may be in trouble to get your pregnancy to an end without the threat of premature birth, so we advise you to discuss your working conditions now with your employer.";

      
      //Calendar Medical
      $rootScope.NumberCalendar = "Congratulations to your";
      $rootScope.Weeks = "th weeks of pregnancy today!";
      $rootScope.delivery = "You should give birth to ";
      $rootScope.calendar = "Your calendar";

      $rootScope.LastM = "The date of your last menstruation is: ";
      $rootScope.DateOfMenstruation = "Start by entering the date of your last rules ";
      $rootScope.LastMenstruationDetail = "Amenorrhea means no rules. Health professionals calculate the stage of pregnancy in weeks of amenorrhea from the first day of the last menstrual period. ";

      $rootScope.BeginOfP = "Your Pregnancy started on: ";
      $rootScope.BeginOfPregnancyDetail = "This date will be determined precisely by your doctor from the results of the first ultrasound and the date of your last menstruation.";

      $rootScope.ReliabilityT = "Reliability of the pregnancy test from: ";
      $rootScope.ReliabilityTPast = "Reliability of the pregnancy test since: ";
      $rootScope.ReliabilityTestDetail = "It is recommended to confirm the results of the pregnancy test with a laboratory blood test in order to more accurately measure hCG hormone levels.";

      $rootScope.FirstC = "Your first consultation must be made between the ";
      $rootScope.FirstCPast = "Your first consultation was carried out the insert the date when we store the data";
      $rootScope.FirstConsultDetail = "Your pregnancy is followed by a doctor or a midwife (liberal, hospital or PMI). As such, you benefit from 7 prenatal medical consultations. During the first consultation, you will establish the main steps of your pregnancy follow-up. It is necessary to trace with your doctor your medical history.";

      $rootScope.FirstE = "Your first ultrasound should be performed between ";
      $rootScope.FirstEPast = "Your first ultrasound was carried out on ";
      $rootScope.FirstEchoDetail = "The dating ultrasound should be performed between the 11th and 13th week of amenorrhea. It allows to confirm the term of pregnancy, to determine the number of embryos, to measure nuchal translucency and to look for certain signs of malformation.";


      $rootScope.FirstPC = "Your first prenatal care must be made between the ";
      $rootScope.FirstPCPast = "Your first prenatal care was conducted in the ";
      $rootScope.FirstPrenatalCareDetail = "This individual or couple interview is carried out by a midwife or a doctor and allows to express your needs and your expectations, to answer your questions and to exchange on your project of birth.";
      

      $rootScope.SecondPC = "Your second prenatal interview should be ";
      $rootScope.SecondPCPast = "Your second prenatal interview was carried out on ";
      $rootScope.SecondPrenatalCareDetail = "Your physician may suggest that you perform the Triple-Test, which is a non-mandatory medical examination that allows you to screen Down Trisomy 21 through a marker assay performed on your blood. If you are over 38 years old, you will be systematically offered to perform an asbestosis test. Your doctor may also recommend that you perform a medical examination of the father - this 100% supported examination is intended to supplement your medical record. ";

      $rootScope.BilanB = "Oral assessment from ";
      $rootScope.BilanBuccoDetail = "You can benefit from a 100% oral health check-up and no advance fees from you. Take care of your teeth as hormonal changes in particular can weaken your teeth and gums, which can increase the risk of premature delivery.";

      $rootScope.SecondE = "Your second ultrasound should be ";
      $rootScope.SecondEPAst = "Your second ultrasound was performed on ";
      $rootScope.SecondEchoDetail = "The morphological ultrasound should be performed between the 21st and 23rd week of amenorrhea. It allows to analyze the morphology of the fetus, to check the fetal growth, to locate the placenta and to detect other anomalies. You can, if you wish, know the sex of your baby!";

      $rootScope.ThirdPC = "Your third prenatal interview should be ";
      $rootScope.ThirdPCPast = "Your third prenatal interview was carried out on ";
      $rootScope.ThirdPrenatalCareDetail = "Your doctor interprets and explains the morphological ultrasound.";

      $rootScope.diabete = "Your diabete screening should be done between the ";
      $rootScope.diabetePast = "Your diabete screening was completed on";
      $rootScope.diabeteDetail = "Gestational diabetes also called hyperglycemia or pregnancy diabetes, is an elevation of blood sugar that occurs during pregnancy. It is a benign form of diabetes which affects between 6% and 12% of pregnancies and requires the setting up of an adapted follow-up.";


      $rootScope.FourPC = "Your fourth prenatal interview should be done between ";
      $rootScope.FourPCPast = "Your fourth prenatal interview was";
      $rootScope.FourPrenatalCareDetail = "Medical consultation of your 6th month of pregnancy.";


      $rootScope.FivePC = "Your fifth prenatal interview should be ";
      $rootScope.FivePCPast = "Your fifth prenatal interview was carried out on ";
      $rootScope.FivePrenatalCareDetail = "Medical consultation of your 7th month of pregnancy.";
      
      $rootScope.ThirdE = "Your third ultrasound should be";
      $rootScope.ThirdEPAst = "Your third ultrasound was performed on";
      $rootScope.ThirdEchoDetail = "Fetal growth ultrasound should be performed between the 31st and 33rd week of amenorrhea. It allows to check fetal growth, presentation and placental location.";

      $rootScope.SixthPC = "Your sixth prenatal interview should be";
      $rootScope.SixthPCPast = "Your sixth prenatal interview was completed on ";
      $rootScope.SixthPrenatalCareDetail = "Your doctor interprets and explains to you the ultrasound of growth. It is also the occasion for him to inform you about your mode of delivery.";

      $rootScope.AnesthetistC = "Your consultation with the anesthetist must be done between ";
      $rootScope.AnesthetistCPast = "Your consultation with the anesthetist was carried out on ";
      $rootScope.AnesthetistConsultDetail = "This consultation ensures the safety of any anesthesia and is mandatory.";

      $rootScope.SeventhPC = "Your seventh prenatal maintenance should be performed between ";
      $rootScope.SeventhPCPast = " Your seventh prenatal maintenance was performed on ";
      $rootScope.SeventhPrenatalCareDetail = "Your doctor will confirm the place and the modalities of your delivery. It will also inform you of the different signs that should attract your attention and bring you to emergency maternity (contractions, loss of fluid, loss of blood, etc.)";

      $rootScope.DateOfT = "Your theoretical term date is: " 
      $rootScope.DateOfTermDetail = "You should consult your doctor or midwife.";

      //Calendar Administratif

      $rootScope.PregnantD = "";


      // Toxo
      $rootScope.QToxo = "Are you immunized against toxoplasmosis?";

      //Menu
      $rootScope.Menu = "Menu";
      $rootScope.MCalendar = "Medical calendar";
      $rootScope.ACalendar = "Administrative calendar";
      $rootScope.ECalendar = "Organic Review";
      $rootScope.MPsycho = "Psycho";
      $rootScope.MToday = "Today";
      $rootScope.MToxo = "Toxoplasmosis";


      //Divers
      $rootScope.And = " and the ";
      $rootScope.ToxoYes = "Yes";
      $rootScope.ToxoNo = "No";
      $rootScope.ToxoIDontKnow = "I don't know";
      $rootScope.CreateAccount = "Create an Account"; 
      $rootScope.OK = "OK";

      $state.go('step1');
    }

})

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
