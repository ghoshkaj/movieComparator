'use strict';

/**
 * @ngdoc function
 * @name movieComparatorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the movieComparatorApp
 */
angular.module('movieComparatorApp')
  .controller('MainCtrl', function ($scope, $http) {
    //$http.jsonp('http://api.rottentomatoes.com/api/public/v1.0/lists/movies/box_office.json?apikey=rx56tnnzu7bad72p2g2qgfms&callback=JSON_CALLBACK').success(function (response) {
    //  var data = [];
    //
    //  for(var i = 0; i < 10; i++) {
    //    data.push({title: response.movies[i].title, score: response.movies[i].ratings.critics_score});
    //  }
    //  //console.log(data);
    //  $scope.thisData = data;
    //});
//console.log('do i ever get reached?');

    $scope.exampleData = [
      {
        'key': 'Series 1',
        'values': [ [ 1025409600000 , 0] , [ 1028088000000 , -6.3382185140371] , [ 1030766400000 , -5.9507873460847] , [ 1033358400000 , -11.569146943813] , [ 1036040400000 , -5.4767332317425] , [ 1038632400000 , 0.50794682203014] , [ 1041310800000 , -5.5310285460542] , [ 1043989200000 , -5.7838296963382] , [ 1046408400000 , -7.3249341615649] , [ 1049086800000 , -6.7078630712489] , [ 1051675200000 , 0.44227126150934] , [ 1054353600000 , 7.2481659343222] , [ 1056945600000 , 9.2512381306992] , [ 1059624000000 , 11.341210982529] , [ 1062302400000 , 14.734820409020] , [ 1064894400000 , 12.387148007542] , [ 1067576400000 , 18.436471461827] , [ 1070168400000 , 19.830742266977] , [ 1072846800000 , 22.643205829887] , [ 1075525200000 , 26.743156781239] , [ 1078030800000 , 29.597478802228] , [ 1080709200000 , 30.831697585341] , [ 1083297600000 , 28.054068024708] , [ 1085976000000 , 29.294079423832] , [ 1088568000000 , 30.269264061274] , [ 1091246400000 , 24.934526898906] , [ 1093924800000 , 24.265982759406] , [ 1096516800000 , 27.217794897473] , [ 1099195200000 , 30.802601992077] , [ 1101790800000 , 36.331003758254] , [ 1104469200000 , 43.142498700060] , [ 1107147600000 , 40.558263931958] , [ 1109566800000 , 42.543622385800] , [ 1112245200000 , 41.683584710331] , [ 1114833600000 , 36.375367302328] , [ 1117512000000 , 40.719688980730] , [ 1120104000000 , 43.897963036919] , [ 1122782400000 , 49.797033975368] , [ 1125460800000 , 47.085993935989] , [ 1128052800000 , 46.601972859745] , [ 1130734800000 , 41.567784572762] , [ 1133326800000 , 47.296923737245] , [ 1136005200000 , 47.642969612080] , [ 1138683600000 , 50.781515820954] , [ 1141102800000 , 52.600229204305] , [ 1143781200000 , 55.599684490628] , [ 1146369600000 , 57.920388436633] , [ 1149048000000 , 53.503593218971] , [ 1151640000000 , 53.522973979964] , [ 1154318400000 , 49.846822298548] , [ 1156996800000 , 54.721341614650] , [ 1159588800000 , 58.186236223191] , [ 1162270800000 , 63.908065540997] , [ 1164862800000 , 69.767285129367] , [ 1167541200000 , 72.534013373592] , [ 1170219600000 , 77.991819436573] , [ 1172638800000 , 78.143584404990] , [ 1175313600000 , 83.702398665233] , [ 1177905600000 , 91.140859312418] , [ 1180584000000 , 98.590960607028] , [ 1183176000000 , 96.245634754228] , [ 1185854400000 , 92.326364432615] , [ 1188532800000 , 97.068765332230] , [ 1191124800000 , 105.81025556260] , [ 1193803200000 , 114.38348777791] , [ 1196398800000 , 103.59604949810] , [ 1199077200000 , 101.72488429307] , [ 1201755600000 , 89.840147735028] , [ 1204261200000 , 86.963597532664] , [ 1206936000000 , 84.075505208491] , [ 1209528000000 , 93.170105645831] , [ 1212206400000 , 103.62838083121] , [ 1214798400000 , 87.458241365091] , [ 1217476800000 , 85.808374141319] , [ 1220155200000 , 93.158054469193] , [ 1222747200000 , 65.973252382360] , [ 1225425600000 , 44.580686638224] , [ 1228021200000 , 36.418977140128] , [ 1230699600000 , 38.727678144761] , [ 1233378000000 , 36.692674173387] , [ 1235797200000 , 30.033022809480] , [ 1238472000000 , 36.707532162718] , [ 1241064000000 , 52.191457688389] , [ 1243742400000 , 56.357883979735] , [ 1246334400000 , 57.629002180305] , [ 1249012800000 , 66.650985790166] , [ 1251691200000 , 70.839243432186] , [ 1254283200000 , 78.731998491499] , [ 1256961600000 , 72.375528540349] , [ 1259557200000 , 81.738387881630] , [ 1262235600000 , 87.539792394232] , [ 1264914000000 , 84.320762662273] , [ 1267333200000 , 90.621278391889] , [ 1270008000000 , 102.47144881651] , [ 1272600000000 , 102.79320353429] , [ 1275278400000 , 90.529736050479] , [ 1277870400000 , 76.580859994531] , [ 1280548800000 , 86.548979376972] , [ 1283227200000 , 81.879653334089] , [ 1285819200000 , 101.72550015956] , [ 1288497600000 , 107.97964852260] , [ 1291093200000 , 106.16240630785] , [ 1293771600000 , 114.84268599533] , [ 1296450000000 , 121.60793322282] , [ 1298869200000 , 133.41437346605] , [ 1301544000000 , 125.46646042904] , [ 1304136000000 , 129.76784954301] , [ 1306814400000 , 128.15798861044] , [ 1309406400000 , 121.92388706072] , [ 1312084800000 , 116.70036100870] , [ 1314763200000 , 88.367701837033] , [ 1317355200000 , 59.159665765725] , [ 1320033600000 , 79.793568139753] , [ 1322629200000 , 75.903834028417] , [ 1325307600000 , 72.704218209157] , [ 1327986000000 , 84.936990804097] , [ 1330491600000 , 93.388148670744]]
      }];

    $scope.barChartData =
      [
        {	'letter':'A',
          'frequency':'.08167'
        },
        {	'letter':'B',
          'frequency':'.01492'
        },
        {	'letter':'C',
          'frequency':'.02782'
        },
        {	'letter':'D',
          'frequency':'.04253'
        },
        {	'letter':'E',
          'frequency':'.12702'
        },
        {	'letter':'F',
          'frequency':'.02288'
        },
        {	'letter':'G',
          'frequency':'.02015'
        },
        {	'letter':'H',
          'frequency':'.06094'
        },
        {	'letter':'I',
          'frequency':'.06966'
        },
        {	'letter':'J',
          'frequency':'.00153'
        },
        {	'letter':'K',
          'frequency':'.00772'
        },
        {	'letter':'L',
          'frequency':'.04025'
        },
        {	'letter':'M',
          'frequency':'.02406'
        },
        {	'letter':'N',
          'frequency':'.06749'
        },
        {	'letter':'O',
          'frequency':'.07507'
        },
        {	'letter':'P',
          'frequency':'.01929'
        },
        {	'letter':'Q',
          'frequency':'.00095'
        },
        {	'letter':'R',
          'frequency':'.05987'
        },
        {	'letter':'S',
          'frequency':'.06327'
        },
        {	'letter':'T',
          'frequency':'.09056'
        },
        {	'letter':'U',
          'frequency':'.02758'
        },
        {	'letter':'V',
          'frequency':'.00978'
        },
        {	'letter':'W',
          'frequency':'.02360'
        },
        {	'letter':'X',
          'frequency':'.00150'
        },
        {	'letter':'Y',
          'frequency':'.01974'
        },
        {	'letter':'Z',
          'frequency':'.00074'
        }
      ];

    //console.log($scope.barChartData);

    $scope.thisData = {'marketDataHistory':
      [{
        'city': '11001',
        'infoDate': '3/31/2014',
        'quarter': '1',
        'year': '2014',
        'dataSource': 'ColliersIntl',

        'marketData': {
          'officeA': {
            'dcTotal': {
              'bldgs': 329,
              'RBA': 89201106,
              'directVacancy': 10.8,
              'subletVacancy': 0.7,
              'totalVacancy': 11.6,
              'totalVacancyPrior': 11.5,
              'leasingActivity': 659280,
              'netAbspCur': 455534,
              'netAbspYTD': 455534,
              'wgtAvgAskLease': 55.26
            },
            'CBD': {
              'bldgs': 100,
              'RBA': 22981491,
              'directVacancy': 11.9,
              'subletVacancy': 1.0,
              'totalVacancy': 12.9,
              'totalVacancyPrior': 13.2,
              'leasingActivity': 146050,
              'netAbspCur': 65962,
              'netAbspYTD': 65962,
              'wgtAvgAskLease': 55.79
            },
            'eastEnd': {
              'bldgs': 119,
              'RBA': 34117392,
              'directVacancy': 9.4,
              'subletVacancy': 0.9,
              'totalVacancy': 10.2,
              'totalVacancyPrior': 9.7,
              'leasingActivity': 243486,
              'netAbspCur': 330682,
              'netAbspYTD': 330682,
              'wgtAvgAskLease': 59.16
            },
            'capitolHill': {
              'bldgs': 13,
              'RBA': 2941200,
              'directVacancy': 8.2,
              'subletVacancy': 0.9,
              'totalVacancy': 9.1,
              'totalVacancyPrior': 9.3,
              'leasingActivity': 0,
              'netAbspCur': 6697,
              'netAbspYTD': 6697,
              'wgtAvgAskLease': 57.90
            },
            'noma': {
              'bldgs': 28,
              'RBA': 9352548,
              'directVacancy': 14.8,
              'subletVacancy': 0.4,
              'totalVacancy': 15.2,
              'totalVacancyPrior': 15.3,
              'leasingActivity': 52944,
              'netAbspCur': 14532,
              'netAbspYTD': 14532,
              'wgtAvgAskLease': 50.06
            },
            'georgetown': {
              'bldgs': 10,
              'RBA': 1771357,
              'directVacancy': 8.5,
              'subletVacancy': 0.9,
              'totalVacancy': 9.3,
              'totalVacancyPrior': 10.4,
              'leasingActivity': 0,
              'netAbspCur': 18720,
              'netAbspYTD': 18720,
              'wgtAvgAskLease': 41.55
            },
            'southwest': {
              'bldgs': 23,
              'RBA': 8859796,
              'directVacancy': 12.4,
              'subletVacancy': 0.2,
              'totalVacancy': 12.6,
              'totalVacancyPrior': 12.0,
              'leasingActivity': 73800,
              'netAbspCur': -53747,
              'netAbspYTD': -53747,
              'wgtAvgAskLease': 50.74
            },
            'capitolRiver': {
              'bldgs': 10,
              'RBA': 3809851,
              'directVacancy': 18.1,
              'subletVacancy': 0.5,
              'totalVacancy': 18.5,
              'totalVacancyPrior': 18.6,
              'leasingActivity': 143000,
              'netAbspCur': 857,
              'netAbspYTD': 857,
              'wgtAvgAskLease': 47.36
            },
            'uptown': {
              'bldgs': 14,
              'RBA': 2521504,
              'directVacancy': 3.9,
              'subletVacancy': 0.3,
              'totalVacancy': 4.2,
              'totalVacancyPrior': 6.1,
              'leasingActivity': 0,
              'netAbspCur': 48379,
              'netAbspYTD': 48379,
              'wgtAvgAskLease': 44.28
            }
          },
          'officeB': {
            'dcTotal': {
              'bldgs': 459,
              'RBA': 47609511,
              'directVacancy': 8.5,
              'subletVacancy': 0.6,
              'totalVacancy': 9.1,
              'totalVacancyPrior': 8.9,
              'leasingActivity': 73766,
              'netAbspCur': -232302,
              'netAbspYTD': -232302,
              'wgtAvgAskLease': 43.57
            },
            'CBD': {
              'bldgs': 156,
              'RBA': 20252427,
              'directVacancy': 7.0,
              'subletVacancy': 0.6,
              'totalVacancy': 7.6,
              'totalVacancyPrior': 7.3,
              'leasingActivity': 31766,
              'netAbspCur': -73436,
              'netAbspYTD': -73436,
              'wgtAvgAskLease': 46.75
            },
            'eastEnd': {
              'bldgs': 106,
              'RBA': 11213322,
              'directVacancy': 12.4,
              'subletVacancy': 1.3,
              'totalVacancy': 13.7,
              'totalVacancyPrior': 12.5,
              'leasingActivity': 42000,
              'netAbspCur': -128637,
              'netAbspYTD': -128637,
              'wgtAvgAskLease': 43.86
            },
            'capitolHill': {
              'bldgs': 27,
              'RBA': 1966761,
              'directVacancy': 9.5,
              'subletVacancy': 0.5,
              'totalVacancy': 10.1,
              'totalVacancyPrior': 9.7,
              'leasingActivity': 0,
              'netAbspCur': -7783,
              'netAbspYTD': -7783,
              'wgtAvgAskLease': 50.25
            },
            'noma': {
              'bldgs': 10,
              'RBA': 1225328,
              'directVacancy': 14.7,
              'subletVacancy': 0.0,
              'totalVacancy': 14.7,
              'totalVacancyPrior': 14.7,
              'leasingActivity': 0,
              'netAbspCur': 0,
              'netAbspYTD': 0,
              'wgtAvgAskLease': 28.84
            },
            'georgetown': {
              'bldgs': 30,
              'RBA': 1258091,
              'directVacancy': 6.5,
              'subletVacancy': 0.0,
              'totalVacancy': 6.5,
              'totalVacancyPrior': 7.6,
              'leasingActivity': 0,
              'netAbspCur': 13492,
              'netAbspYTD': 13492,
              'wgtAvgAskLease': 42.09
            },
            'southwest': {
              'bldgs': 11,
              'RBA': 3016399,
              'directVacancy': 4.7,
              'subletVacancy': 0.0,
              'totalVacancy': 4.7,
              'totalVacancyPrior': 8.5,
              'leasingActivity': 0,
              'netAbspCur': -9825,
              'netAbspYTD': -9825,
              'wgtAvgAskLease': 44.03
            },
            'capitolRiver': {
              'bldgs': 3,
              'RBA': 1184298,
              'directVacancy': 7.3,
              'subletVacancy': 0.0,
              'totalVacancy': 7.3,
              'totalVacancyPrior': 7.3,
              'leasingActivity': 0,
              'netAbspCur': 0,
              'netAbspYTD': 0,
              'wgtAvgAskLease': 39.00
            },
            'uptown': {
              'bldgs': 103,
              'RBA': 6387567,
              'directVacancy': 7.4,
              'subletVacancy': 0.2,
              'totalVacancy': 7.6,
              'totalVacancyPrior': 7.1,
              'leasingActivity': 0,
              'netAbspCur': -21166,
              'netAbspYTD': -21166,
              'wgtAvgAskLease': 39.29
            }
          },
          'officeC': {},
          'officeAll': {
            'dcTotal': {
              'bldgs': 1022,
              'RBA': 144299812,
              'directVacancy': 9.7,
              'subletVacancy': 0.7,
              'totalVacancy': 10.40,
              'totalVacancyPrior': 10.30,
              'leasingActivity': 733046,
              'netAbspCur': 202047,
              'netAbspYTD': 202047,
              'wgtAvgAskLease': 50.74
            },
            'CBD': {
              'bldgs': 291,
              'RBA': 44686154,
              'directVacancy': 9.3,
              'subletVacancy': 0.8,
              'totalVacancy': 10.1,
              'totalVacancyPrior': 10.2,
              'leasingActivity': 177816,
              'netAbspCur': -6411,
              'netAbspYTD': -6411,
              'wgtAvgAskLease': 51.59
            },
            'eastEnd': {
              'bldgs': 263,
              'RBA': 47096952,
              'directVacancy': 9.8,
              'subletVacancy': 1.0,
              'totalVacancy': 10.8,
              'totalVacancyPrior': 10.1,
              'leasingActivity': 285486,
              'netAbspCur': 194818,
              'netAbspYTD': 194818,
              'wgtAvgAskLease': 54.09
            },
            'capitolHill': {
              'bldgs': 66,
              'RBA': 5538467,
              'directVacancy': 8.2,
              'subletVacancy': 0.7,
              'totalVacancy': 8.9,
              'totalVacancyPrior': 9.0,
              'leasingActivity': 0,
              'netAbspCur': 2024,
              'netAbspYTD': 2024,
              'wgtAvgAskLease': 55.64
            },
            'noma': {
              'bldgs': 44,
              'RBA': 10713060,
              'directVacancy': 14.8,
              'subletVacancy': 0.3,
              'totalVacancy': 15.1,
              'totalVacancyPrior': 15.2,
              'leasingActivity': 52944,
              'netAbspCur': 14532,
              'netAbspYTD': 14532,
              'wgtAvgAskLease': 46.73
            },
            'georgetown': {
              'bldgs': 54,
              'RBA': 3318870,
              'directVacancy': 7.5,
              'subletVacancy': 0.5,
              'totalVacancy': 7.9,
              'totalVacancyPrior': 8.7,
              'leasingActivity': 0,
              'netAbspCur': 26677,
              'netAbspYTD': 26677,
              'wgtAvgAskLease': 41.88
            },
            'southwest': {
              'bldgs': 35,
              'RBA': 11894937,
              'directVacancy': 10.4,
              'subletVacancy': 0.1,
              'totalVacancy': 10.6,
              'totalVacancyPrior': 11.0,
              'leasingActivity': 73800,
              'netAbspCur': -63572,
              'netAbspYTD': -63572,
              'wgtAvgAskLease': 49.78
            },
            'capitolRiver': {
              'bldgs': 15,
              'RBA': 5044359,
              'directVacancy': 15.5,
              'subletVacancy': 0.3,
              'totalVacancy': 15.8,
              'totalVacancyPrior': 16.0,
              'leasingActivity': 143000,
              'netAbspCur': 7384,
              'netAbspYTD': 7384,
              'wgtAvgAskLease': 44.22
            },
            'uptown': {
              'bldgs': 224,
              'RBA': 11430668,
              'directVacancy': 6.7,
              'subletVacancy': 0.2,
              'totalVacancy': 6.9,
              'totalVacancyPrior': 6.8,
              'leasingActivity': 0,
              'netAbspCur': 458,
              'netAbspYTD': 458,
              'wgtAvgAskLease': 39.17
            }
          }
        }
      },
        {
          'city': '11001',
          'infoDate': '6/31/2014',
          'quarter': 2,
          'year': 2014,
          'dataSource': 'ColliersIntl',

          'marketData': {
            'officeA': {
              'dcTotal': {
                'bldgs': 330,
                'RBA': 89488906,
                'directVacancy': 10.8,
                'subletVacancy': 0.7,
                'totalVacancy': 11.5,
                'totalVacancyPrior': 11.6,
                'leasingActivity': 1415419,
                'netAbspCur': 311301,
                'netAbspYTD': 766835,
                'wgtAvgAskLease': 55.76
              },
              'CBD': {
                'bldgs': 100,
                'RBA': 22981491,
                'directVacancy': 10.7,
                'subletVacancy': 1.0,
                'totalVacancy': 11.7,
                'totalVacancyPrior': 12.9,
                'leasingActivity': 161484,
                'netAbspCur': 266484,
                'netAbspYTD': 332446,
                'wgtAvgAskLease': 57.39
              },
              'eastEnd': {
                'bldgs': 120,
                'RBA': 34405192,
                'directVacancy': 10.0,
                'subletVacancy': 0.8,
                'totalVacancy': 10.9,
                'totalVacancyPrior': 10.2,
                'leasingActivity': 1167350,
                'netAbspCur': 62945,
                'netAbspYTD': 393627,
                'wgtAvgAskLease': 58.97
              },
              'capitolHill': {
                'bldgs': 13,
                'RBA': 2941200,
                'directVacancy': 8.4,
                'subletVacancy': 0.9,
                'totalVacancy': 9.3,
                'totalVacancyPrior': 9.1,
                'leasingActivity': 0,
                'netAbspCur': -4155,
                'netAbspYTD': 2542,
                'wgtAvgAskLease': 58.52
              },
              'noma': {
                'bldgs': 28,
                'RBA': 9352548,
                'directVacancy': 14.7,
                'subletVacancy': 0.3,
                'totalVacancy': 15.0,
                'totalVacancyPrior': 15.2,
                'leasingActivity': 0,
                'netAbspCur': 19607,
                'netAbspYTD': 34139,
                'wgtAvgAskLease': 50.41
              },
              'westEnd': {
                'bldgs': 12,
                'RBA': 2845967,
                'directVacancy': 5.9,
                'subletVacancy': 0.3,
                'totalVacancy': 6.2,
                'totalVacancyPrior': 3.2,
                'leasingActivity': 26979,
                'netAbspCur': -83974,
                'netAbspYTD': -60540,
                'wgtAvgAskLease': 53.63
              },
              'georgetown': {
                'bldgs': 10,
                'RBA': 1771357,
                'directVacancy': 10.3,
                'subletVacancy': 0.7,
                'totalVacancy': 11.0,
                'totalVacancyPrior': 9.3,
                'leasingActivity': 0,
                'netAbspCur': -29650,
                'netAbspYTD': -10930,
                'wgtAvgAskLease': 41.96
              },
              'southwest': {
                'bldgs': 10,
                'RBA': 3809851,
                'directVacancy': 18.3,
                'subletVacancy': 0.3,
                'totalVacancy': 18.6,
                'totalVacancyPrior': 18.5,
                'leasingActivity': 33042,
                'netAbspCur': -1606,
                'netAbspYTD': -731,
                'wgtAvgAskLease': 44.40
              },
              'capitolRiver': {
                'bldgs': 10,
                'RBA': 3809851,
                'directVacancy': 18.3,
                'subletVacancy': 0.3,
                'totalVacancy': 18.6,
                'totalVacancyPrior': 18.5,
                'leasingActivity': 33042,
                'netAbspCur': -1606,
                'netAbspYTD': -731,
                'wgtAvgAskLease': 44.40
              },
              'uptown': {
                'bldgs': 14,
                'RBA': 2521504,
                'directVacancy': 3.2,
                'subletVacancy': 0.0,
                'totalVacancy': 3.2,
                'totalVacancyPrior': 4.2,
                'leasingActivity': 0,
                'netAbspCur': 24220,
                'netAbspYTD': 72599,
                'wgtAvgAskLease': 43.91
              }
            },
            'officeB': {

              'dcTotal': {
                'bldgs': 458,
                'RBA': 47453018,
                'directVacancy': 10.0,
                'subletVacancy': 0.4,
                'totalVacancy': 10.4,
                'totalVacancyPrior': 9.1,
                'leasingActivity': 301729,
                'netAbspCur': -798259,
                'netAbspYTD': -1018017,
                'wgtAvgAskLease': 43.82
              },
              'CBD': {
                'bldgs': 156,
                'RBA': 20252427,
                'directVacancy': 7.7,
                'subletVacancy': 0.4,
                'totalVacancy': 8.2,
                'totalVacancyPrior': 7.5,
                'leasingActivity': 260031,
                'netAbspCur': -129996,
                'netAbspYTD': -190888,
                'wgtAvgAskLease': 47.01
              },
              'eastEnd': {
                'bldgs': 106,
                'RBA': 11213322,
                'directVacancy': 12.3,
                'subletVacancy': 1.0,
                'totalVacancy': 13.2,
                'totalVacancyPrior': 13.7,
                'leasingActivity': 41698,
                'netAbspCur': 52073,
                'netAbspYTD': -75654,
                'wgtAvgAskLease': 43.81
              },
              'capitolHill': {
                'bldgs': 27,
                'RBA': 1966761,
                'directVacancy': 10.4,
                'subletVacancy': 0.3,
                'totalVacancy': 10.6,
                'totalVacancyPrior': 10.1,
                'leasingActivity': 0,
                'netAbspCur': -10662,
                'netAbspYTD': -18445,
                'wgtAvgAskLease': 52.10
              },
              'noma': {
                'bldgs': 10,
                'RBA': 1225328,
                'directVacancy': 14.6,
                'subletVacancy': 0.0,
                'totalVacancy': 14.6,
                'totalVacancyPrior': 14.7,
                'leasingActivity': 1706,
                'netAbspCur': 1706,
                'netAbspYTD': 28.84,
                'wgtAvgAskLease': 28.84
              },
              'westEnd': {
                'bldgs': 13,
                'RBA': 1105318,
                'directVacancy': 5.0,
                'subletVacancy': 0.1,
                'totalVacancy': 5.1,
                'totalVacancyPrior': 8.7,
                'leasingActivity': 0,
                'netAbspCur': 40057,
                'netAbspYTD': 42110,
                'wgtAvgAskLease': 42.30
              },
              'georgetown': {
                'bldgs': 30,
                'RBA': 1258091,
                'directVacancy': 6.1,
                'subletVacancy': 0.0,
                'totalVacancy': 6.1,
                'totalVacancyPrior': 6.5,
                'leasingActivity': 0,
                'netAbspCur': 5383,
                'netAbspYTD': 18875,
                'wgtAvgAskLease': 40.07
              },
              'southwest': {
                'bldgs': 11,
                'RBA': 3016399,
                'directVacancy': 5.0,
                'subletVacancy': 0.0,
                'totalVacancy': 5.0,
                'totalVacancyPrior': 4.7,
                'leasingActivity': 0,
                'netAbspCur': -8086,
                'netAbspYTD': -17911,
                'wgtAvgAskLease': 44.31
              },
              'capitolRiver': {
                'bldgs': 3,
                'RBA': 1184298,
                'directVacancy': 18.3,
                'subletVacancy': 0.0,
                'totalVacancy': 18.3,
                'totalVacancyPrior': 7.3,
                'leasingActivity': 0,
                'netAbspCur': -130336,
                'netAbspYTD': -130336,
                'wgtAvgAskLease': 39.00
              },
              'uptown': {
                'bldgs': 102,
                'RBA': 6231074,
                'directVacancy': 14.8,
                'subletVacancy': 0.2,
                'totalVacancy': 14.9,
                'totalVacancyPrior': 7.3,
                'leasingActivity': 0,
                'netAbspCur': -618398,
                'netAbspYTD': -646564,
                'wgtAvgAskLease': 39.81
              }
            },
            'officeC': {},
            'officeAll': {
              'dcTotal': {
                'bldgs': 1022,
                'RBA': 144431119,
                'directVacancy': 10.2,
                'subletVacancy': 0.6,
                'totalVacancy': 10.8,
                'totalVacancyPrior': 10.4,
                'leasingActivity': 1746559,
                'netAbspCur': -423371,
                'netAbspYTD': -208780,
                'wgtAvgAskLease': 51.22
              },
              'CBD': {
                'bldgs': 291,
                'RBA': 44686154,
                'directVacancy': 9.1,
                'subletVacancy': 0.7,
                'totalVacancy': 9.8,
                'totalVacancyPrior': 10.1,
                'leasingActivity': 450926,
                'netAbspCur': 142597,
                'netAbspYTD': 148730,
                'wgtAvgAskLease': 52.48
              },
              'eastEnd': {
                'bldgs': 264,
                'RBA': 47384752,
                'directVacancy': 10.3,
                'subletVacancy': 0.9,
                'totalVacancy': 11.1,
                'totalVacancyPrior': 10.8,
                'leasingActivity': 1209048,
                'netAbspCur': 120861,
                'netAbspYTD': 315679,
                'wgtAvgAskLease': 54.40
              },
              'capitolHill': {
                'bldgs': 66,
                'RBA': 5538467,
                'directVacancy': 8.7,
                'subletVacancy': 0.6,
                'totalVacancy': 9.3,
                'totalVacancyPrior': 8.9,
                'leasingActivity': 0,
                'netAbspCur': -18600,
                'netAbspYTD': -16576,
                'wgtAvgAskLease': 56.08
              },
              'noma': {
                'bldgs': 44,
                'RBA': 10713060,
                'directVacancy': 14.7,
                'subletVacancy': 0.3,
                'totalVacancy': 15.0,
                'totalVacancyPrior': 15.2,
                'leasingActivity': 0,
                'netAbspCur': 19607,
                'netAbspYTD': 34139,
                'wgtAvgAskLease': 50.41
              },
              'westEnd': {
                'bldgs': 12,
                'RBA': 2845967,
                'directVacancy': 5.9,
                'subletVacancy': 0.3,
                'totalVacancy': 6.2,
                'totalVacancyPrior': 3.2,
                'leasingActivity': 26979,
                'netAbspCur': -83974,
                'netAbspYTD': -60540,
                'wgtAvgAskLease': 53.63
              },
              'georgetown': {
                'bldgs': 54,
                'RBA': 3318870,
                'directVacancy': 8.5,
                'subletVacancy': 0.5,
                'totalVacancy': 9.0,
                'totalVacancyPrior': 7.9,
                'leasingActivity': 0,
                'netAbspCur': -34723,
                'netAbspYTD': -8046,
                'wgtAvgAskLease': 41.76
              },
              'southwest': {
                'bldgs': 35,
                'RBA': 11894937,
                'directVacancy': 9.8,
                'subletVacancy': 0.3,
                'totalVacancy': 10.1,
                'totalVacancyPrior': 10.6,
                'leasingActivity': 26564,
                'netAbspCur': 49344,
                'netAbspYTD': -12228,
                'wgtAvgAskLease': 49.96
              },
              'capitolRiver': {
                'bldgs': 15,
                'RBA': 5044359,
                'directVacancy': 18.2,
                'subletVacancy': 0.2,
                'totalVacancy': 18.5,
                'totalVacancyPrior': 15.8,
                'leasingActivity': 33042,
                'netAbspCur': -131942,
                'netAbspYTD': -124558,
                'wgtAvgAskLease': 41.48
              },
              'uptown': {
                'bldgs': 223,
                'RBA': 11274175,
                'directVacancy': 10.0,
                'subletVacancy': 0.1,
                'totalVacancy': 10.1,
                'totalVacancyPrior': 6.7,
                'leasingActivity': 0,
                'netAbspCur': -528304,
                'netAbspYTD': -528304,
                'wgtAvgAskLease': 39.49
              }
            }
          }
        },
        {

          'city': '11001',
          'infoDate': '9/31/2014',
          'quarter': 3,
          'year': 2014,
          'dataSource': 'ColliersIntl',

          'marketData': {
            'officeA': {
              'dcTotal': {
                'bldgs': 331,
                'RBA': 89657675,
                'directVacancy': 11.1,
                'subletVacancy': 0.8,
                'totalVacancy': 11.9,
                'totalVacancyPrior': 11.5,
                'leasingActivity': 1729336,
                'netAbspCur': -238737,
                'netAbspYTD': 552766,
                'wgtAvgAskLease': 55.99
              },
              'CBD': {
                'bldgs': 101,
                'RBA': 23150260,
                'directVacancy': 11.7,
                'subletVacancy': 1.0,
                'totalVacancy': 12.6,
                'totalVacancyPrior': 11.7,
                'leasingActivity': 222757,
                'netAbspCur': -64245,
                'netAbspYTD': 268201,
                'wgtAvgAskLease': 58.23
              },
              'eastEnd': {
                'bldgs': 120,
                'RBA': 34405192,
                'directVacancy': 10.2,
                'subletVacancy': 0.8,
                'totalVacancy': 11.0,
                'totalVacancyPrior': 10.7,
                'leasingActivity': 755416,
                'netAbspCur': -100246,
                'netAbspYTD': 321855,
                'wgtAvgAskLease': 59.69
              },
              'capitolHill': {
                'bldgs': 13,
                'RBA': 2941200,
                'directVacancy': 14.6,
                'subletVacancy': 0.9,
                'totalVacancy': 15.4,
                'totalVacancyPrior': 9.3,
                'leasingActivity': 19000,
                'netAbspCur': -181358,
                'netAbspYTD': -178816,
                'wgtAvgAskLease': 55.56
              },
              'noma': {
                'bldgs': 28,
                'RBA': 9352548,
                'directVacancy': 14.1,
                'subletVacancy': 0.3,
                'totalVacancy': 14.4,
                'totalVacancyPrior': 15.0,
                'leasingActivity': 612549,
                'netAbspCur': 53422,
                'netAbspYTD': 83755,
                'wgtAvgAskLease': 50.79
              },
              'westEnd': {
                'bldgs': 12,
                'RBA': 2845967,
                'directVacancy': 6.1,
                'subletVacancy': 0.7,
                'totalVacancy': 6.8,
                'totalVacancyPrior': 6.2,
                'leasingActivity': 0,
                'netAbspCur': -16308,
                'netAbspYTD': -76848,
                'wgtAvgAskLease': 53.67
              },
              'georgetown': {
                'bldgs': 10,
                'RBA': 1771357,
                'directVacancy': 8.9,
                'subletVacancy': 0.2,
                'totalVacancy': 9.1,
                'totalVacancyPrior': 11.0,
                'leasingActivity': 61736,
                'netAbspCur': 34303,
                'netAbspYTD': 23373,
                'wgtAvgAskLease': 40.57
              },
              'southwest': {
                'bldgs': 23,
                'RBA': 8859796,
                'directVacancy': 10.7,
                'subletVacancy': 0.5,
                'totalVacancy': 11.1,
                'totalVacancyPrior': 11.9,
                'leasingActivity': 57878,
                'netAbspCur': 69945,
                'netAbspYTD': 73628,
                'wgtAvgAskLease': 50.38
              },
              'capitolRiver': {
                'bldgs': 10,
                'RBA': 3809851,
                'directVacancy': 18.0,
                'subletVacancy': 0.8,
                'totalVacancy': 18.7,
                'totalVacancyPrior': 18.6,
                'leasingActivity': 0,
                'netAbspCur': -5623,
                'netAbspYTD': -6354,
                'wgtAvgAskLease': 44.22
              },
              'uptown': {
                'bldgs': 14,
                'RBA': 2521504,
                'directVacancy': 2.2,
                'subletVacancy': 2.1,
                'totalVacancy': 4.3,
                'totalVacancyPrior': 3.2,
                'leasingActivity': 0,
                'netAbspCur': -28627,
                'netAbspYTD': 43972,
                'wgtAvgAskLease': 45.00
              }
            },
            'officeB': {
              'dcTotal': {
                'bldgs': 454,
                'RBA': 47120907,
                'directVacancy': 9.9,
                'subletVacancy': 0.3,
                'totalVacancy': 10.2,
                'totalVacancyPrior': 10.4,
                'leasingActivity': 188117,
                'netAbspCur': -31643,
                'netAbspYTD': -1049660,
                'wgtAvgAskLease': 43.97
              },
              'CBD': {
                'bldgs': 156,
                'RBA': 20252427,
                'directVacancy': 7.6,
                'subletVacancy': 0.3,
                'totalVacancy': 7.9,
                'totalVacancyPrior': 8.2,
                'leasingActivity': 60228,
                'netAbspCur': 57551,
                'netAbspYTD': -133337,
                'wgtAvgAskLease': 47.11
              },
              'eastEnd': {
                'bldgs': 105,
                'RBA': 11014145,
                'directVacancy': 12.6,
                'subletVacancy': 0.7,
                'totalVacancy': 13.2,
                'totalVacancyPrior': 13.2,
                'leasingActivity': 45749,
                'netAbspCur': -74256,
                'netAbspYTD': -150820,
                'wgtAvgAskLease': 43.95
              },
              'capitolHill': {
                'bldgs': 26,
                'RBA': 1952387,
                'directVacancy': 10.5,
                'subletVacancy': 0.3,
                'totalVacancy': 10.8,
                'totalVacancyPrior': 10.6,
                'leasingActivity': 82140,
                'netAbspCur': -15527,
                'netAbspYTD': -33972,
                'wgtAvgAskLease': 52.86
              },
              'noma': {
                'bldgs': 10,
                'RBA': 1225328,
                'directVacancy': 15.3,
                'subletVacancy': 0.6,
                'totalVacancy': 15.9,
                'totalVacancyPrior': 14.6,
                'leasingActivity': 0,
                'netAbspCur': -16182,
                'netAbspYTD': -14476,
                'wgtAvgAskLease': 29.16
              },
              'westEnd': {
                'bldgs': 12,
                'RBA': 1007258,
                'directVacancy': 5.5,
                'subletVacancy': 0.7,
                'totalVacancy': 6.2,
                'totalVacancyPrior': 5.1,
                'leasingActivity': 0,
                'netAbspCur': -104146,
                'netAbspYTD': -62036,
                'wgtAvgAskLease': 42.58
              },
              'georgetown': {
                'bldgs': 30,
                'RBA': 1258091,
                'directVacancy': 6.2,
                'subletVacancy': 0.0,
                'totalVacancy': 6.2,
                'totalVacancyPrior': 6.1,
                'leasingActivity': 0,
                'netAbspCur': -1065,
                'netAbspYTD': 17270,
                'wgtAvgAskLease': 40.03
              },
              'southwest': {
                'bldgs': 11,
                'RBA': 3016399,
                'directVacancy': 5.3,
                'subletVacancy': 0.0,
                'totalVacancy': 5.3,
                'totalVacancyPrior': 5.0,
                'leasingActivity': 0,
                'netAbspCur': -9352,
                'netAbspYTD': -27263,
                'wgtAvgAskLease': 44.70
              },
              'capitolRiver': {
                'bldgs': 3,
                'RBA': 1184298,
                'directVacancy': 18.3,
                'subletVacancy': 0.0,
                'totalVacancy': 18.3,
                'totalVacancyPrior': 18.3,
                'leasingActivity': 0,
                'netAbspCur': 0,
                'netAbspYTD': -130336,
                'wgtAvgAskLease': 39.00
              },
              'uptown': {
                'bldgs': 101,
                'RBA': 6210574,
                'directVacancy': 13.5,
                'subletVacancy': 0.1,
                'totalVacancy': 13.6,
                'totalVacancyPrior': 14.9,
                'leasingActivity': 0,
                'netAbspCur': 131874,
                'netAbspYTD': -514690,
                'wgtAvgAskLease': 39.81
              }
            },
            'officeC': {},
            'officeAll': {
              'dcTotal': {
                'bldgs': 1016,
                'RBA': 144221640,
                'directVacancy': 10.4,
                'subletVacancy': 0.6,
                'totalVacancy': 11.0,
                'totalVacancyPrior': 10.7,
                'leasingActivity': 2215453,
                'netAbspCur': -352413,
                'netAbspYTD': -536525,
                'wgtAvgAskLease': 51.26
              },
              'CBD': {
                'bldgs': 292,
                'RBA': 44854923,
                'directVacancy': 9.5,
                'subletVacancy': 0.6,
                'totalVacancy': 10.1,
                'totalVacancyPrior': 9.8,
                'leasingActivity': 282985,
                'netAbspCur': -3444,
                'netAbspYTD': 145286,
                'wgtAvgAskLease': 52.63
              },
              'eastEnd': {
                'bldgs': 263,
                'RBA': 47209667,
                'directVacancy': 12.4,
                'subletVacancy': 0.6,
                'totalVacancy': 13.0,
                'totalVacancyPrior': 9.3,
                'leasingActivity': 101140,
                'netAbspCur': -217552,
                'netAbspYTD': -234128,
                'wgtAvgAskLease': 53.70
              },
              'capitolHill': {
                'bldgs': 65,
                'RBA': 5524093,
                'directVacancy': 12.4,
                'subletVacancy': 0.6,
                'totalVacancy': 13.0,
                'totalVacancyPrior': 9.3,
                'leasingActivity': 101140,
                'netAbspCur': -217552,
                'netAbspYTD': -234128,
                'wgtAvgAskLease': 53.70
              },
              'noma': {
                'bldgs': 44,
                'RBA': 10713060,
                'directVacancy': 14.2,
                'subletVacancy': 0.4,
                'totalVacancy': 14.5,
                'totalVacancyPrior': 14.9,
                'leasingActivity': 612549,
                'netAbspCur': 44890,
                'netAbspYTD': 76929,
                'wgtAvgAskLease': 52.89
              },
              'westEnd': {
                'bldgs': 29,
                'RBA': 4478285,
                'directVacancy': 5.1,
                'subletVacancy': 0.6,
                'totalVacancy': 5.7,
                'totalVacancyPrior': 5.1,
                'leasingActivity': 0,
                'netAbspCur': -119684,
                'netAbspYTD': -137464,
                'wgtAvgAskLease': 52.89
              },
              'georgetown': {
                'bldgs': 54,
                'RBA': 3318870,
                'directVacancy': 7.8,
                'subletVacancy': 0.2,
                'totalVacancy': 8.0,
                'totalVacancyPrior': 9.0,
                'leasingActivity': 61736,
                'netAbspCur': 32698,
                'netAbspYTD': 24652,
                'wgtAvgAskLease': 41.16
              },
              'southwest': {
                'bldgs': 35,
                'RBA': 11894937,
                'directVacancy': 9.3,
                'subletVacancy': 0.3,
                'totalVacancy': 9.6,
                'totalVacancyPrior': 10.1,
                'leasingActivity': 57878,
                'netAbspCur': 60593,
                'netAbspYTD': 46365,
                'wgtAvgAskLease': 49.53
              },
              'capitolRiver': {
                'bldgs': 15,
                'RBA': 5044359,
                'directVacancy': 18.0,
                'subletVacancy': 0.6,
                'totalVacancy': 18.6,
                'totalVacancyPrior': 18.5,
                'leasingActivity': 0,
                'netAbspCur': -5623,
                'netAbspYTD': -130181,
                'wgtAvgAskLease': 41.37
              },
              'uptown': {
                'bldgs': 219,
                'RBA': 11183446,
                'directVacancy': 9.1,
                'subletVacancy': 0.7,
                'totalVacancy': 9.8,
                'totalVacancyPrior': 10.1,
                'leasingActivity': 0,
                'netAbspCur': -63610,
                'netAbspYTD': -464236,
                'wgtAvgAskLease': 39.65
              }
            }
          }
        },
        {
          'city': '11001',
          'infoDate': '12/31/2014',
          'quarter': 4,
          'year': 2014,
          'dataSource': 'ColliersIntl',

          'marketData': {
            'officeA': {
              'dcTotal': {
                'bldgs': 329,
                'RBA': 89349089,
                'directVacancy': 10.7,
                'subletVacancy': 0.8,
                'totalVacancy': 11.5,
                'totalVacancyPrior': 11.9,
                'leasingActivity': 1199413,
                'netAbspCur': 107238,
                'netAbspYTD': 647720,
                'wgtAvgAskLease': 55.92
              },
              'CBD': {
                'bldgs': 99,
                'RBA': 22836030,
                'directVacancy': 10.7,
                'subletVacancy': 1.1,
                'totalVacancy': 11.8,
                'totalVacancyPrior': 12.6,
                'leasingActivity': 324656,
                'netAbspCur': -84478,
                'netAbspYTD': 183723,
                'wgtAvgAskLease': 58.33
              },
              'eastEnd': {
                'bldgs': 120,
                'RBA': 34410836,
                'directVacancy': 10.2,
                'subletVacancy': 0.9,
                'totalVacancy': 11.1,
                'totalVacancyPrior': 11.1,
                'leasingActivity': 689773,
                'netAbspCur': -15261,
                'netAbspYTD': 294310,
                'wgtAvgAskLease': 59.90
              },
              'capitolHill': {
                'bldgs': 13,
                'RBA': 2941200,
                'directVacancy': 14.7,
                'subletVacancy': 0.8,
                'totalVacancy': 15.5,
                'totalVacancyPrior': 15.4,
                'leasingActivity': 103844,
                'netAbspCur': -2544,
                'netAbspYTD': -181360,
                'wgtAvgAskLease': 55.56
              },
              'noma': {
                'bldgs': 28,
                'RBA': 9352548,
                'directVacancy': 12.4,
                'subletVacancy': 0.4,
                'totalVacancy': 12.8,
                'totalVacancyPrior': 14.4,
                'leasingActivity': 0,
                'netAbspCur': 157283,
                'netAbspYTD': 241038,
                'wgtAvgAskLease': 51.02
              },
              'westEnd': {
                'bldgs': 12,
                'RBA': 2845967,
                'directVacancy': 8.1,
                'subletVacancy': 0.3,
                'totalVacancy': 8.4,
                'totalVacancyPrior': 6.8,
                'leasingActivity': 0,
                'netAbspCur': -47225,
                'netAbspYTD': -124073,
                'wgtAvgAskLease': 54.01
              },
              'georgetown': {
                'bldgs': 10,
                'RBA': 1771357,
                'directVacancy': 9.1,
                'subletVacancy': 0.1,
                'totalVacancy': 9.2,
                'totalVacancyPrior': 9.1,
                'leasingActivity': 0,
                'netAbspCur': -2564,
                'netAbspYTD': 20809,
                'wgtAvgAskLease': 41.31
              },
              'southwest': {
                'bldgs': 23,
                'RBA': 8859796,
                'directVacancy': 10.4,
                'subletVacancy': 0.3,
                'totalVacancy': 10.7,
                'totalVacancyPrior': 11.1,
                'leasingActivity': 81140,
                'netAbspCur': 37012,
                'netAbspYTD': 110640,
                'wgtAvgAskLease': 49.50
              },
              'capitolRiver': {
                'bldgs': 10,
                'RBA': 3809851,
                'directVacancy': 15.9,
                'subletVacancy': 0.8,
                'totalVacancy': 16.7,
                'totalVacancyPrior': 18.7,
                'leasingActivity': 0,
                'netAbspCur': 78494,
                'netAbspYTD': 72140,
                'wgtAvgAskLease': 44.41
              },
              'uptown': {
                'bldgs': 14,
                'RBA': 2521504,
                'directVacancy': 2.8,
                'subletVacancy': 2.1,
                'totalVacancy': 4.9,
                'totalVacancyPrior': 4.3,
                'leasingActivity': 0,
                'netAbspCur': -13470,
                'netAbspYTD': 30493,
                'wgtAvgAskLease': 44.90
              }
            },
            'officeB': {

              'dcTotal': {
                'bldgs': 455,
                'RBA': 47095256,
                'directVacancy': 9.7,
                'subletVacancy': 0.3,
                'totalVacancy': 10.0,
                'totalVacancyPrior': 10.4,
                'leasingActivity': 490957,
                'netAbspCur': 35901,
                'netAbspYTD': -1013759,
                'wgtAvgAskLease': 43.66
              },
              'CBD': {
                'bldgs': 156,
                'RBA': 20252427,
                'directVacancy': 7.6,
                'subletVacancy': 0.4,
                'totalVacancy': 7.9,
                'totalVacancyPrior': 7.9,
                'leasingActivity': 158291,
                'netAbspCur': -14174,
                'netAbspYTD': -147511,
                'wgtAvgAskLease': 46.46
              },
              'eastEnd': {
                'bldgs': 105,
                'RBA': 11014145,
                'directVacancy': 12.3,
                'subletVacancy': 0.4,
                'totalVacancy': 12.7,
                'totalVacancyPrior': 13.2,
                'leasingActivity': 18423,
                'netAbspCur': 60194,
                'netAbspYTD': -90626,
                'wgtAvgAskLease': 44.13
              },
              'capitolHill': {
                'bldgs': 25,
                'RBA': 1852387,
                'directVacancy': 11.4,
                'subletVacancy': 0.5,
                'totalVacancy': 11.8,
                'totalVacancyPrior': 10.8,
                'leasingActivity': 0,
                'netAbspCur': -108781,
                'netAbspYTD': -142753,
                'wgtAvgAskLease': 52.89
              },
              'noma': {
                'bldgs': 10,
                'RBA': 1225328,
                'directVacancy': 14.8,
                'subletVacancy': 0.6,
                'totalVacancy': 15.5,
                'totalVacancyPrior': 15.9,
                'leasingActivity': 0,
                'netAbspCur': 5286,
                'netAbspYTD': -9190,
                'wgtAvgAskLease': 28.84
              },
              'westEnd': {
                'bldgs': 12,
                'RBA': 1007258,
                'directVacancy': 4.9,
                'subletVacancy': 0.7,
                'totalVacancy': 5.6,
                'totalVacancyPrior': 14.5,
                'leasingActivity': 0,
                'netAbspCur': 6310,
                'netAbspYTD': -55726,
                'wgtAvgAskLease': 42.33
              },
              'georgetown': {
                'bldgs': 30,
                'RBA': 1258091,
                'directVacancy': 4.7,
                'subletVacancy': 0.0,
                'totalVacancy': 4.7,
                'totalVacancyPrior': 6.2,
                'leasingActivity': 0,
                'netAbspCur': 19880,
                'netAbspYTD': 37150,
                'wgtAvgAskLease': 38.37
              },
              'southwest': {
                'bldgs': 11,
                'RBA': 3016399,
                'directVacancy': 4.7,
                'subletVacancy': 0.0,
                'totalVacancy': 4.7,
                'totalVacancyPrior': 5.3,
                'leasingActivity': 314243,
                'netAbspCur': 18745,
                'netAbspYTD': -8518,
                'wgtAvgAskLease': 43.14
              },
              'capitolRiver': {
                'bldgs': 3,
                'RBA': 1184298,
                'directVacancy': 18.3,
                'subletVacancy': 0.0,
                'totalVacancy': 18.3,
                'totalVacancyPrior': 18.3,
                'leasingActivity': 0,
                'netAbspCur': 0,
                'netAbspYTD': -130336,
                'wgtAvgAskLease': 39.00
              },
              'uptown': {
                'bldgs': 103,
                'RBA': 6284923,
                'directVacancy': 13.1,
                'subletVacancy': 0.0,
                'totalVacancy': 13.1,
                'totalVacancyPrior': 13.5,
                'leasingActivity': 0,
                'netAbspCur': 48441,
                'netAbspYTD': -466249,
                'wgtAvgAskLease': 39.71
              }
            },
            'officeC': {},
            'officeAll': {
              'dcTotal': {
                'bldgs': 1017,
                'RBA': 143941041,
                'directVacancy': 10.0,
                'subletVacancy': 0.6,
                'totalVacancy': 10.6,
                'totalVacancyPrior': 11.1,
                'leasingActivity': 1690370,
                'netAbspCur': 147462,
                'netAbspYTD': -401347,
                'wgtAvgAskLease': 51.10
              },
              'CBD': {
                'bldgs': 290,
                'RBA': 44540693,
                'directVacancy': 9.0,
                'subletVacancy': 0.7,
                'totalVacancy': 9.7,
                'totalVacancyPrior': 10.1,
                'leasingActivity': 482947,
                'netAbspCur': -109280,
                'netAbspYTD': 36006,
                'wgtAvgAskLease': 52.32
              },
              'eastEnd': {
                'bldgs': 263,
                'RBA': 47215311,
                'directVacancy': 10.4,
                'subletVacancy': 0.8,
                'totalVacancy': 11.2,
                'totalVacancyPrior': 11.3,
                'leasingActivity': 708196,
                'netAbspCur': 56347,
                'netAbspYTD': 180315,
                'wgtAvgAskLease': 55.23
              },
              'capitolHill': {
                'bldgs': 64,
                'RBA': 5424093,
                'directVacancy': 12.8,
                'subletVacancy': 0.6,
                'totalVacancy': 13.5,
                'totalVacancyPrior': 13.0,
                'leasingActivity': 103844,
                'netAbspCur': -114745,
                'netAbspYTD': -348873,
                'wgtAvgAskLease': 53.64
              },
              'noma': {
                'bldgs': 44,
                'RBA': 10713060,
                'directVacancy': 12.6,
                'subletVacancy': 0.4,
                'totalVacancy': 13.0,
                'totalVacancyPrior': 14.5,
                'leasingActivity': 0,
                'netAbspCur': 162569,
                'netAbspYTD': 239498,
                'wgtAvgAskLease': 46.45
              },
              'westEnd': {
                'bldgs': 29,
                'RBA': 4478285,
                'directVacancy': 6.2,
                'subletVacancy': 0.4,
                'totalVacancy': 6.6,
                'totalVacancyPrior': 7.7,
                'leasingActivity': 0,
                'netAbspCur': -40915,
                'netAbspYTD': -178379,
                'wgtAvgAskLease': 53.36
              },
              'georgetown': {
                'bldgs': 54,
                'RBA': 3318870,
                'directVacancy': 7.1,
                'subletVacancy': 0.1,
                'totalVacancy': 7.3,
                'totalVacancyPrior': 8.0,
                'leasingActivity': 0,
                'netAbspCur': 22851,
                'netAbspYTD': 47503,
                'wgtAvgAskLease': 40.38
              },
              'southwest': {
                'bldgs': 35,
                'RBA': 11894937,
                'directVacancy': 8.9,
                'subletVacancy': 0.2,
                'totalVacancy': 9.2,
                'totalVacancyPrior': 9.6,
                'leasingActivity': 395383,
                'netAbspCur': 55757,
                'netAbspYTD': 102122,
                'wgtAvgAskLease': 48.72
              },
              'capitolRiver': {
                'bldgs': 15,
                'RBA': 5044359,
                'directVacancy': 16.4,
                'subletVacancy': 0.6,
                'totalVacancy': 17.0,
                'totalVacancyPrior': 18.6,
                'leasingActivity': 78494,
                'netAbspCur': -51687,
                'netAbspYTD': -130181,
                'wgtAvgAskLease': 41.73
              },
              'uptown': {
                'bldgs': 223,
                'RBA': 11311433,
                'directVacancy': 9.1,
                'subletVacancy': 0.6,
                'totalVacancy': 9.7,
                'totalVacancyPrior': 9.8,
                'leasingActivity': 0,
                'netAbspCur': 36384,
                'netAbspYTD': -427852,
                'wgtAvgAskLease': 39.61
              }
            }
          }
        },
        {

          'city': '11001',
          'infoDate': '3/31/2015',
          'quarter': 1,
          'year': 2015,
          'dataSource': 'ColliersIntl',

          'marketData': {
            'officeA': {
              'dcTotal': {
                'bldgs': 330,
                'RBA': 89488906,
                'directVacancy': 10.8,
                'subletVacancy': 0.7,
                'totalVacancy': 11.5,
                'totalVacancyPrior': 11.6,
                'leasingActivity': 1415419,
                'netAbspCur': 311301,
                'netAbspYTD': 766835,
                'wgtAvgAskLease': 55.76
              },
              'CBD': {
                'bldgs': 100,
                'RBA': 22981491,
                'directVacancy': 10.7,
                'subletVacancy': 1.0,
                'totalVacancy': 11.7,
                'totalVacancyPrior': 12.9,
                'leasingActivity': 161484,
                'netAbspCur': 266484,
                'netAbspYTD': 332446,
                'wgtAvgAskLease': 57.39
              },
              'eastEnd': {
                'bldgs': 120,
                'RBA': 34405192,
                'directVacancy': 10.0,
                'subletVacancy': 0.8,
                'totalVacancy': 10.9,
                'totalVacancyPrior': 10.2,
                'leasingActivity': 1167350,
                'netAbspCur': 62945,
                'netAbspYTD': 393627,
                'wgtAvgAskLease': 58.97
              },
              'capitolHill': {
                'bldgs': 13,
                'RBA': 2941200,
                'directVacancy': 8.4,
                'subletVacancy': 0.9,
                'totalVacancy': 9.3,
                'totalVacancyPrior': 9.1,
                'leasingActivity': 0,
                'netAbspCur': -4155,
                'netAbspYTD': 2542,
                'wgtAvgAskLease': 58.52
              },
              'noma': {
                'bldgs': 28,
                'RBA': 9352548,
                'directVacancy': 14.7,
                'subletVacancy': 0.3,
                'totalVacancy': 15.0,
                'totalVacancyPrior': 15.2,
                'leasingActivity': 0,
                'netAbspCur': 19607,
                'netAbspYTD': 34139,
                'wgtAvgAskLease': 50.41
              },
              'westEnd': {
                'bldgs': 12,
                'RBA': 2845967,
                'directVacancy': 5.9,
                'subletVacancy': 0.3,
                'totalVacancy': 6.2,
                'totalVacancyPrior': 3.2,
                'leasingActivity': 26979,
                'netAbspCur': -83974,
                'netAbspYTD': -60540,
                'wgtAvgAskLease': 53.63
              },
              'georgetown': {
                'bldgs': 10,
                'RBA': 1771357,
                'directVacancy': 10.3,
                'subletVacancy': 0.7,
                'totalVacancy': 11.0,
                'totalVacancyPrior': 9.3,
                'leasingActivity': 0,
                'netAbspCur': -29650,
                'netAbspYTD': -10930,
                'wgtAvgAskLease': 41.96
              },
              'southwest': {
                'bldgs': 23,
                'RBA': 8859796,
                'directVacancy': 11.5,
                'subletVacancy': 0.5,
                'totalVacancy': 11.9,
                'totalVacancyPrior': 12.6,
                'leasingActivity': 26564,
                'netAbspCur': 57430,
                'netAbspYTD': 3683,
                'wgtAvgAskLease': 50.84
              },
              'capitolRiver': {
                'bldgs': 10,
                'RBA': 3809851,
                'directVacancy': 18.3,
                'subletVacancy': 0.3,
                'totalVacancy': 18.6,
                'totalVacancyPrior': 18.5,
                'leasingActivity': 33042,
                'netAbspCur': -1606,
                'netAbspYTD': -731,
                'wgtAvgAskLease': 44.40
              },
              'uptown': {
                'bldgs': 14,
                'RBA': 2521504,
                'directVacancy': 3.2,
                'subletVacancy': 0.0,
                'totalVacancy': 3.2,
                'totalVacancyPrior': 4.2,
                'leasingActivity': 0,
                'netAbspCur': 24220,
                'netAbspYTD': 72599,
                'wgtAvgAskLease': 43.91
              }
            },
            'officeB': {
              'dcTotal': {
                'bldgs': 457,
                'RBA': 47432518,
                'directVacancy': 10.0,
                'subletVacancy': 0.4,
                'totalVacancy': 10.4,
                'totalVacancyPrior': 9.1,
                'leasingActivity': 301729,
                'netAbspCur': -798259,
                'netAbspYTD': -1018017,
                'wgtAvgAskLease': 43.82
              },
              'CBD': {
                'bldgs': 156,
                'RBA': 20252427,
                'directVacancy': 7.7,
                'subletVacancy': 0.4,
                'totalVacancy': 8.2,
                'totalVacancyPrior': 7.5,
                'leasingActivity': 260031,
                'netAbspCur': -129996,
                'netAbspYTD': -190888,
                'wgtAvgAskLease': 47.01
              },
              'eastEnd': {
                'bldgs': 106,
                'RBA': 11213322,
                'directVacancy': 12.3,
                'subletVacancy': 1.0,
                'totalVacancy': 13.2,
                'totalVacancyPrior': 13.7,
                'leasingActivity': 41698,
                'netAbspCur': 52073,
                'netAbspYTD': -76564,
                'wgtAvgAskLease': 43.81
              },
              'capitolHill': {
                'bldgs': 27,
                'RBA': 1966761,
                'directVacancy': 10.4,
                'subletVacancy': 0.3,
                'totalVacancy': 10.6,
                'totalVacancyPrior': 10.1,
                'leasingActivity': 0,
                'netAbspCur': -10662,
                'netAbspYTD': -18445,
                'wgtAvgAskLease': 52.10
              },
              'noma': {
                'bldgs': 10,
                'RBA': 1225328,
                'directVacancy': 14.6,
                'subletVacancy': 0.0,
                'totalVacancy': 14.6,
                'totalVacancyPrior': 14.7,
                'leasingActivity': 0,
                'netAbspCur': 1706,
                'netAbspYTD': 1706,
                'wgtAvgAskLease': 28.84
              },
              'westEnd': {
                'bldgs': 13,
                'RBA': 1105318,
                'directVacancy': 5.0,
                'subletVacancy': 0.1,
                'totalVacancy': 5.1,
                'totalVacancyPrior': 8.7,
                'leasingActivity': 0,
                'netAbspCur': 40057,
                'netAbspYTD': 42110,
                'wgtAvgAskLease': 42.30
              },
              'georgetown': {
                'bldgs': 30,
                'RBA': 1258091,
                'directVacancy': 6.1,
                'subletVacancy': 0.0,
                'totalVacancy': 6.1,
                'totalVacancyPrior': 6.5,
                'leasingActivity': 0,
                'netAbspCur': 5383,
                'netAbspYTD': 18875,
                'wgtAvgAskLease': 40.07
              },
              'southwest': {
                'bldgs': 11,
                'RBA': 3016399,
                'directVacancy': 5.0,
                'subletVacancy': 0.0,
                'totalVacancy': 5.0,
                'totalVacancyPrior': 4.7,
                'leasingActivity': 0,
                'netAbspCur': -8086,
                'netAbspYTD': -17911,
                'wgtAvgAskLease': 44.31
              },
              'capitolRiver': {
                'bldgs': 3,
                'RBA': 1184298,
                'directVacancy': 18.3,
                'subletVacancy': 0.0,
                'totalVacancy': 18.3,
                'totalVacancyPrior': 7.3,
                'leasingActivity': 0,
                'netAbspCur': -130336,
                'netAbspYTD': -130336,
                'wgtAvgAskLease': 39.00
              },
              'uptown': {
                'bldgs': 101,
                'RBA': 6210574,
                'directVacancy': 14.8,
                'subletVacancy': 0.2,
                'totalVacancy': 15.0,
                'totalVacancyPrior': 7.3,
                'leasingActivity': 0,
                'netAbspCur': -618298,
                'netAbspYTD': -646564,
                'wgtAvgAskLease': 39.81
              }
            },
            'officeC': {},
            'officeAll': {
              'dcTotal': {
                'bldgs': 1020,
                'RBA': 144394028,
                'directVacancy': 10.2,
                'subletVacancy': 0.6,
                'totalVacancy': 10.8,
                'totalVacancyPrior': 10.4,
                'leasingActivity': 1746559,
                'netAbspCur': -423371,
                'netAbspYTD': -208780,
                'wgtAvgAskLease': 51.22
              },
              'CBD': {
                'bldgs': 291,
                'RBA': 44686154,
                'directVacancy': 9.1,
                'subletVacancy': 0.7,
                'totalVacancy': 9.8,
                'totalVacancyPrior': 10.1,
                'leasingActivity': 450926,
                'netAbspCur': 142597,
                'netAbspYTD': 148730,
                'wgtAvgAskLease': 52.48
              },
              'eastEnd': {
                'bldgs': 264,
                'RBA': 47384752,
                'directVacancy': 10.3,
                'subletVacancy': 0.9,
                'totalVacancy': 11.1,
                'totalVacancyPrior': 10.8,
                'leasingActivity': 1209048,
                'netAbspCur': 120861,
                'netAbspYTD': 315679,
                'wgtAvgAskLease': 54.40
              },
              'capitolHill': {
                'bldgs': 66,
                'RBA': 5538467,
                'directVacancy': 8.7,
                'subletVacancy': 0.6,
                'totalVacancy': 9.3,
                'totalVacancyPrior': 8.9,
                'leasingActivity': 0,
                'netAbspCur': -18600,
                'netAbspYTD': -16576,
                'wgtAvgAskLease': 56.08
              },
              'noma': {
                'bldgs': 44,
                'RBA': 10713060,
                'directVacancy': 14.7,
                'subletVacancy': 0.3,
                'totalVacancy': 14.9,
                'totalVacancyPrior': 15.1,
                'leasingActivity': 0,
                'netAbspCur': 21313,
                'netAbspYTD': 35845,
                'wgtAvgAskLease': 46.69
              },
              'westEnd': {
                'bldgs': 30,
                'RBA': 2845967,
                'directVacancy': 4.9,
                'subletVacancy': 0.2,
                'totalVacancy': 5.1,
                'totalVacancyPrior': 4.2,
                'leasingActivity': 26979,
                'netAbspCur': -43917,
                'netAbspYTD': -17780,
                'wgtAvgAskLease': 52.63
              },
              'georgetown': {
                'bldgs': 54,
                'RBA': 3318870,
                'directVacancy': 8.5,
                'subletVacancy': 0.5,
                'totalVacancy': 9.0,
                'totalVacancyPrior': 7.9,
                'leasingActivity': 0,
                'netAbspCur': -34723,
                'netAbspYTD': -8046,
                'wgtAvgAskLease': 41.76
              },
              'southwest': {
                'bldgs': 35,
                'RBA': 11894937,
                'directVacancy': 9.8,
                'subletVacancy': 0.3,
                'totalVacancy': 10.1,
                'totalVacancyPrior': 10.6,
                'leasingActivity': 26564,
                'netAbspCur': 49344,
                'netAbspYTD': -14228,
                'wgtAvgAskLease': 49.96
              },
              'capitolRiver': {
                'bldgs': 15,
                'RBA': 5044359,
                'directVacancy': 18.2,
                'subletVacancy': 0.2,
                'totalVacancy': 18.5,
                'totalVacancyPrior': 15.8,
                'leasingActivity': 33042,
                'netAbspCur': -131942,
                'netAbspYTD': -124558,
                'wgtAvgAskLease': 41.48
              },
              'uptown': {
                'bldgs': 221,
                'RBA': 11237084,
                'directVacancy': 10.1,
                'subletVacancy': 0.1,
                'totalVacancy': 10.1,
                'totalVacancyPrior': 6.7,
                'leasingActivity': 0,
                'netAbspCur': -528304,
                'netAbspYTD': -527846,
                'wgtAvgAskLease': 39.49
              }
            }
          }
        }]
    }
  });


