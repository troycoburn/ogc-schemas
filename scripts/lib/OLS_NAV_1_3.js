var OLS_NAV_1_3_Module_Factory = function () {
  var OLS_NAV_1_3 = {
    n: 'OLS_NAV_1_3',
    dens: 'http:\/\/www.opengis.net\/ols\/nav',
    deps: ['OLS_1_2', 'GML_3_1_1'],
    tis: [{
        ln: 'GetPositionRequestType',
        bti: 'OLS_1_2.AbstractRequestParametersType',
        ps: [{
            n: 'useHistory',
            rq: true,
            en: 'UseHistory',
            ti: 'Boolean'
          }, {
            n: 'currentPosition',
            rq: true,
            en: 'CurrentPosition',
            ti: 'OLS_1_2.PositionType'
          }, {
            n: 'priority',
            rq: true,
            ti: 'Int',
            an: {
              lp: 'priority'
            },
            t: 'a'
          }]
      }, {
        ln: 'RoutePointSequenceType.ViaPoint',
        tn: null,
        bti: '.RoutePointType',
        ps: [{
            n: 'ordered',
            ti: 'Boolean',
            an: {
              lp: 'ordered'
            },
            t: 'a'
          }]
      }, {
        ln: 'RouteLinkAndCost',
        ps: [{
            n: 'link',
            rq: true,
            en: 'Link',
            ti: '.AbstractIDType'
          }, {
            n: 'estLinkTravelTime',
            rq: true,
            en: 'EstLinkTravelTime',
            ti: 'Integer'
          }, {
            n: 'nodeTravelTime',
            rq: true,
            en: 'NodeTravelTime',
            ti: 'Int'
          }]
      }, {
        ln: 'CursorType',
        ps: [{
            n: 'cursorID',
            rq: true,
            en: 'CursorID',
            ti: '.CursorIDType'
          }, {
            n: 'cursorType',
            rq: true,
            en: 'CursorType'
          }]
      }, {
        ln: 'CursorIDType',
        bti: '.AbstractIDType'
      }, {
        ln: 'RouteControlType',
        ps: [{
            n: 'costCriteria',
            rq: true,
            en: 'CostCriteria',
            ti: '.RouteCostModelType'
          }, {
            n: 'vehicle',
            mno: 0,
            col: true,
            en: 'Vehicle',
            ti: '.VehicleTypeN'
          }, {
            n: 'vehicleCompositionLogic',
            en: 'VehicleCompositionLogic'
          }, {
            n: 'routeStartDateTime',
            en: 'RouteStartDateTime',
            ti: '.DateTimeType'
          }, {
            n: 'routeEndDateTime',
            en: 'RouteEndDateTime',
            ti: '.DateTimeType'
          }, {
            n: 'useRealTimeTraffic',
            ti: 'Boolean',
            an: {
              lp: 'useRealTimeTraffic'
            },
            t: 'a'
          }]
      }, {
        ln: 'RoutePointType',
        ps: [{
            n: 'linkLoci',
            rq: true,
            col: true,
            en: 'LinkLoci',
            ti: '.LocusType'
          }]
      }, {
        ln: 'DetermineRouteResponseType',
        bti: 'OLS_1_2.AbstractResponseParametersType',
        ps: [{
            n: 'routeLinkAndCost',
            rq: true,
            en: 'RouteLinkAndCost',
            ti: '.CursorType'
          }, {
            n: 'firstBucket',
            en: 'FirstBucket',
            ti: '.CursorFetchResponse'
          }, {
            n: 'routeHandle',
            en: {
              lp: 'RouteHandle',
              ns: 'http:\/\/www.opengis.net\/xls'
            },
            ti: 'OLS_1_2.RouteHandleType'
          }, {
            n: 'routeSummary',
            en: {
              lp: 'RouteSummary',
              ns: 'http:\/\/www.opengis.net\/xls'
            },
            ti: 'OLS_1_2.RouteSummaryType'
          }, {
            n: 'constraintRelaxed',
            en: 'ConstraintRelaxed',
            ti: 'Boolean'
          }, {
            n: 'whichConstrainWasRelaxed',
            en: 'WhichConstrainWasRelaxed',
            ti: 'AnyType'
          }]
      }, {
        ln: 'SetCursorPositionRequest',
        bti: 'OLS_1_2.AbstractRequestParametersType',
        ps: [{
            n: 'cursorID',
            rq: true,
            en: 'CursorID',
            ti: '.CursorIDType'
          }, {
            n: 'cursorStartPosition',
            rq: true,
            en: 'CursorStartPosition'
          }, {
            n: 'numOfPositions',
            rq: true,
            en: 'NumOfPositions',
            ti: 'Long'
          }, {
            n: 'priority',
            rq: true,
            ti: 'Int',
            an: {
              lp: 'priority'
            },
            t: 'a'
          }]
      }, {
        ln: 'GetCursorPositionResponse',
        bti: 'OLS_1_2.AbstractResponseParametersType',
        ps: [{
            n: 'cursorPosition',
            rq: true,
            en: 'CursorPosition',
            ti: 'Long'
          }]
      }, {
        ln: 'VehicleTypeN',
        tn: 'VehicleType.N',
        ps: [{
            n: 'vehicleValue',
            rq: true,
            en: 'VehicleValue',
            ti: 'Integer'
          }, {
            n: 'vehicleName',
            en: 'VehicleName'
          }, {
            n: 'exclusionary',
            ti: 'Boolean',
            an: {
              lp: 'Exclusionary'
            },
            t: 'a'
          }]
      }, {
        ln: 'DayOfWeekOfMonthType',
        ps: [{
            n: 'dayOfWeek',
            rq: true,
            en: 'DayOfWeek'
          }, {
            n: 'weekOfMonth',
            rq: true,
            en: 'WeekOfMonth',
            ti: 'Int'
          }]
      }, {
        ln: 'TimeZoneType',
        ps: [{
            n: 'code',
            rq: true,
            en: 'Code',
            ti: 'Long'
          }, {
            n: 'minutesFromGMT',
            rq: true,
            en: 'MinutesFromGMT',
            ti: 'Short'
          }, {
            n: 'description',
            rq: true,
            en: 'Description'
          }]
      }, {
        ln: 'DateType',
        ps: [{
            n: 'absoluteDateType',
            en: 'AbsoluteDateType',
            ti: '.AbsoluteDateType'
          }, {
            n: 'extendedDate',
            en: 'ExtendedDate',
            ti: '.ExtendedDateType'
          }]
      }, {
        ln: 'GetNearbyMapObjRequestType',
        bti: 'OLS_1_2.AbstractRequestParametersType',
        ps: [{
            n: 'currentPosition',
            rq: true,
            en: 'CurrentPosition',
            ti: 'OLS_1_2.PositionType'
          }, {
            n: 'delta',
            rq: true,
            en: 'Delta',
            ti: 'Integer'
          }, {
            n: 'getFirstBucket',
            en: 'GetFirstBucket',
            ti: 'Integer'
          }, {
            n: 'priority',
            rq: true,
            ti: 'Int',
            an: {
              lp: 'priority'
            },
            t: 'a'
          }]
      }, {
        ln: 'DayOfWeekOfMonthOfYearType',
        ps: [{
            n: 'dayOfWeek',
            rq: true,
            en: 'DayOfWeek'
          }, {
            n: 'weekOfMonth',
            rq: true,
            en: 'WeekOfMonth',
            ti: 'Int'
          }, {
            n: 'monthOfYear',
            rq: true,
            en: 'MonthOfYear',
            ti: 'Int'
          }]
      }, {
        ln: 'GetCursorPositionRequest',
        bti: 'OLS_1_2.AbstractRequestParametersType',
        ps: [{
            n: 'cursorID',
            rq: true,
            en: 'CursorID',
            ti: '.CursorIDType'
          }, {
            n: 'priority',
            rq: true,
            ti: 'Int',
            an: {
              lp: 'priority'
            },
            t: 'a'
          }]
      }, {
        ln: 'AbstractIDType',
        ps: [{
            n: 'id',
            rq: true,
            en: 'ID',
            ti: 'Integer'
          }]
      }, {
        ln: 'SetCursorPositionResponse',
        bti: 'OLS_1_2.AbstractResponseParametersType',
        ps: [{
            n: 'gapNum',
            rq: true,
            en: 'GapNum',
            ti: 'Long'
          }]
      }, {
        ln: 'RouteCostModelType',
        ps: [{
            n: 'minimizerGoal',
            rq: true,
            en: 'MinimizerGoal'
          }, {
            n: 'highwayAffinity',
            en: 'HighwayAffinity'
          }, {
            n: 'tollroadAffinity',
            en: 'TollroadAffinity'
          }, {
            n: 'scenicRoute',
            ti: 'Boolean',
            an: {
              lp: 'ScenicRoute'
            },
            t: 'a'
          }]
      }, {
        ln: 'DateTimeType',
        ps: [{
            n: 'startDate',
            en: 'StartDate',
            ti: '.DateType'
          }, {
            n: 'endDate',
            en: 'EndDate',
            ti: '.DateType'
          }, {
            n: 'startTime',
            en: 'StartTime',
            ti: 'Int'
          }, {
            n: 'endTime',
            en: 'EndTime',
            ti: 'Int'
          }, {
            n: 'timeZone',
            en: 'TimeZone',
            ti: '.TimeZoneType'
          }, {
            n: 'daylightSavingsTimeCode',
            en: 'DaylightSavingsTimeCode',
            ti: 'Int'
          }, {
            n: 'exclusionary',
            ti: 'Boolean',
            an: {
              lp: 'Exclusionary'
            },
            t: 'a'
          }, {
            n: 'spring',
            ti: 'Boolean',
            an: {
              lp: 'Spring'
            },
            t: 'a'
          }, {
            n: 'summer',
            ti: 'Boolean',
            an: {
              lp: 'Summer'
            },
            t: 'a'
          }, {
            n: 'fall',
            ti: 'Boolean',
            an: {
              lp: 'Fall'
            },
            t: 'a'
          }, {
            n: 'winter',
            ti: 'Boolean',
            an: {
              lp: 'Winter'
            },
            t: 'a'
          }, {
            n: 'holiday',
            ti: 'Boolean',
            an: {
              lp: 'Holiday'
            },
            t: 'a'
          }, {
            n: 'dawnToDusk',
            ti: 'Boolean',
            an: {
              lp: 'DawnToDusk'
            },
            t: 'a'
          }, {
            n: 'duskToDawn',
            ti: 'Boolean',
            an: {
              lp: 'DuskToDawn'
            },
            t: 'a'
          }]
      }, {
        ln: 'RoutePointSequenceType',
        ps: [{
            n: 'startPoint',
            rq: true,
            en: 'StartPoint',
            ti: '.RoutePointType'
          }, {
            n: 'viaPoint',
            mno: 0,
            col: true,
            en: 'ViaPoint',
            ti: '.RoutePointSequenceType.ViaPoint'
          }, {
            n: 'endPoint',
            rq: true,
            en: 'EndPoint',
            ti: '.RoutePointType'
          }]
      }, {
        ln: 'GetCursorInfoRequest',
        bti: 'OLS_1_2.AbstractRequestParametersType',
        ps: [{
            n: 'cursorID',
            rq: true,
            en: 'CursorID',
            ti: '.CursorIDType'
          }, {
            n: 'priority',
            rq: true,
            ti: 'Int',
            an: {
              lp: 'priority'
            },
            t: 'a'
          }]
      }, {
        ln: 'DetermineRouteRequestType',
        bti: 'OLS_1_2.AbstractRequestParametersType',
        ps: [{
            n: 'routeHandle',
            rq: true,
            en: 'RouteHandle',
            ti: 'OLS_1_2.RouteHandleType'
          }, {
            n: 'extendedRoutePlan',
            rq: true,
            en: 'ExtendedRoutePlan',
            ti: '.RoutePlanType'
          }, {
            n: 'boundingBox',
            en: 'BoundingBox',
            ti: 'GML_3_1_1.EnvelopeType'
          }, {
            n: 'routeGuidanceRequest',
            en: 'RouteGuidanceRequest',
            ti: 'OLS_1_2.RouteInstructionsRequestType'
          }, {
            n: 'firstBucketSize',
            en: 'FirstBucketSize',
            ti: 'Integer'
          }, {
            n: 'priority',
            rq: true,
            ti: 'Int',
            an: {
              lp: 'priority'
            },
            t: 'a'
          }, {
            n: 'provideRouteHandle',
            ti: 'Boolean',
            an: {
              lp: 'provideRouteHandle'
            },
            t: 'a'
          }, {
            n: 'distanceUnit',
            ti: 'OLS_1_2.DistanceUnitType',
            an: {
              lp: 'distanceUnit'
            },
            t: 'a'
          }]
      }, {
        ln: 'ProcessCursorRequest',
        bti: 'OLS_1_2.AbstractRequestParametersType',
        ps: [{
            n: 'cursorID',
            rq: true,
            en: 'CursorID',
            ti: '.CursorIDType'
          }, {
            n: 'actionFunc',
            rq: true,
            en: 'ActionFunc',
            ti: 'AnyType'
          }, {
            n: 'actionFuncParam',
            rq: true,
            en: 'ActionFuncParam',
            ti: 'AnyType'
          }, {
            n: 'priority',
            rq: true,
            ti: 'Int',
            an: {
              lp: 'priority'
            },
            t: 'a'
          }]
      }, {
        ln: 'GetPositionResponseType',
        bti: 'OLS_1_2.AbstractResponseParametersType',
        ps: [{
            n: 'locus',
            rq: true,
            en: 'Locus',
            ti: '.LocusType'
          }]
      }, {
        ln: 'DayOfWeekOfYearType',
        ps: [{
            n: 'dayOfWeek',
            rq: true,
            en: 'DayOfWeek'
          }, {
            n: 'weekOfYear',
            rq: true,
            en: 'WeekOfYear',
            ti: 'Int'
          }]
      }, {
        ln: 'AbsoluteDateType',
        ps: [{
            n: 'monthOfYear',
            rq: true,
            en: 'MonthOfYear',
            ti: 'Int'
          }, {
            n: 'dayOfMonth',
            rq: true,
            en: 'DayOfMonth',
            ti: 'Int'
          }, {
            n: 'year',
            rq: true,
            en: 'Year',
            ti: 'Int'
          }]
      }, {
        ln: 'CursorInfoType',
        ps: [{
            n: 'cursorBufferStart',
            rq: true,
            en: 'CursorBufferStart',
            ti: 'Long'
          }, {
            n: 'cursorBufferEnd',
            rq: true,
            en: 'CursorBufferEnd',
            ti: 'Long'
          }, {
            n: 'resultsSetComplete',
            rq: true,
            en: 'ResultsSetComplete',
            ti: 'Boolean'
          }, {
            n: 'currentCursorPosition',
            rq: true,
            en: 'CurrentCursorPosition',
            ti: 'Long'
          }]
      }, {
        ln: 'CloseCursorRequest',
        bti: 'OLS_1_2.AbstractRequestParametersType',
        ps: [{
            n: 'cursorID',
            rq: true,
            en: 'CursorID',
            ti: '.CursorIDType'
          }, {
            n: 'priority',
            rq: true,
            ti: 'Int',
            an: {
              lp: 'priority'
            },
            t: 'a'
          }]
      }, {
        ln: 'DayOfMonthOfYearType',
        ps: [{
            n: 'dayOfMonth',
            rq: true,
            en: 'DayOfMonth',
            ti: 'Int'
          }, {
            n: 'monthOfYear',
            rq: true,
            en: 'MonthOfYear',
            ti: 'Int'
          }]
      }, {
        ln: 'GetCursorInfoResponse',
        bti: 'OLS_1_2.AbstractResponseParametersType',
        ps: [{
            n: 'cursorInfo',
            rq: true,
            en: 'CursorInfo',
            ti: '.CursorInfoType'
          }]
      }, {
        ln: 'RoutePlanType',
        ps: [{
            n: 'wayPointList',
            rq: true,
            en: 'WayPointList',
            ti: '.RoutePointSequenceType'
          }, {
            n: 'avoidList',
            en: 'AvoidList',
            ti: 'OLS_1_2.AvoidListType'
          }, {
            n: 'extendedRouteControl',
            rq: true,
            en: 'ExtendedRouteControl',
            ti: '.RouteControlType'
          }, {
            n: 'useRealTimeTraffic',
            ti: 'Boolean',
            an: {
              lp: 'useRealTimeTraffic'
            },
            t: 'a'
          }, {
            n: 'relaxConstraint',
            rq: true,
            ti: 'Boolean',
            an: {
              lp: 'RelaxConstraint'
            },
            t: 'a'
          }]
      }, {
        ln: 'MapObjType',
        ps: [{
            n: 'cursor',
            rq: true,
            en: 'Cursor',
            ti: '.CursorType'
          }, {
            n: 'firstBucket',
            en: 'FirstBucket',
            ti: '.CursorFetchResponse'
          }]
      }, {
        ln: 'GetNearbyMapObjResponseType',
        bti: 'OLS_1_2.AbstractResponseParametersType',
        ps: [{
            n: 'mapObj',
            rq: true,
            en: 'MapObj',
            ti: '.MapObjType'
          }]
      }, {
        ln: 'CursorFetchRequest',
        bti: 'OLS_1_2.AbstractRequestParametersType',
        ps: [{
            n: 'cursorID',
            rq: true,
            en: 'CursorID',
            ti: '.CursorIDType'
          }, {
            n: 'fetchDirection',
            rq: true,
            en: 'FetchDirection'
          }, {
            n: 'numRecordsToFetch',
            rq: true,
            en: 'NumRecordsToFetch',
            ti: 'Integer'
          }, {
            n: 'priority',
            rq: true,
            ti: 'Int',
            an: {
              lp: 'priority'
            },
            t: 'a'
          }]
      }, {
        ln: 'ProcessCursorResponse',
        bti: 'OLS_1_2.AbstractResponseParametersType',
        ps: [{
            n: 'numRecordsProcessed',
            rq: true,
            en: 'NumRecordsProcessed',
            ti: 'Long'
          }]
      }, {
        ln: 'CursorFetchResponse',
        bti: 'OLS_1_2.AbstractResponseParametersType',
        ps: [{
            n: 'numFetchedRecords',
            rq: true,
            en: 'NumFetchedRecords',
            ti: 'Long'
          }, {
            n: 'cursorType',
            rq: true,
            en: 'CursorType'
          }, {
            n: 'retrievedRecords',
            rq: true,
            col: true,
            en: 'RetrievedRecords',
            ti: 'AnyType'
          }]
      }, {
        ln: 'LocusType',
        bti: 'OLS_1_2.AbstractWayPointType',
        ps: [{
            n: 'link',
            rq: true,
            en: 'Link',
            ti: '.AbstractIDType'
          }, {
            n: 'positionAlongLink',
            en: 'PositionAlongLink',
            ti: 'Decimal'
          }, {
            n: 'side',
            en: 'Side',
            ti: 'AnyType'
          }]
      }, {
        ln: 'ExtendedDateType',
        ps: [{
            n: 'dayOfWeek',
            en: 'DayOfWeek'
          }, {
            n: 'dayOfYear',
            en: 'DayOfYear',
            ti: 'Int'
          }, {
            n: 'dayOfMonth',
            en: 'DayOfMonth',
            ti: 'Int'
          }, {
            n: 'dayOfWeekOfMonthType',
            en: 'DayOfWeekOfMonthType',
            ti: '.DayOfWeekOfMonthType'
          }, {
            n: 'dayOfWeekOfYearType',
            en: 'DayOfWeekOfYearType',
            ti: '.DayOfWeekOfYearType'
          }, {
            n: 'weekOfMonth',
            en: 'WeekOfMonth',
            ti: 'Int'
          }, {
            n: 'weekOfYear',
            en: 'WeekOfYear',
            ti: 'Int'
          }, {
            n: 'monthOfYear',
            en: 'MonthOfYear',
            ti: 'Int'
          }, {
            n: 'dayOfMonthOfYearType',
            en: 'DayOfMonthOfYearType',
            ti: '.DayOfMonthOfYearType'
          }, {
            n: 'dayOfWeekOfMonthOfYearType',
            en: 'DayOfWeekOfMonthOfYearType',
            ti: '.DayOfMonthOfYearType'
          }]
      }, {
        t: 'enum',
        ln: 'DayOfWeekEnum',
        vs: ['Monday = 0x1', 'Tuesday = 0x2', 'Wednesday = 0x4', 'Thursday = 0x8', 'Friday = 0x10', 'Saturday = 0x20', 'Sunday = 0x40']
      }, {
        t: 'enum',
        ln: 'VehicleTypeName',
        vs: ['All Vehicles', 'Passenger Cars', 'Residential Vehicle', 'High Occupancy Vehicle', 'Car with Trailer', 'Emergency Vehicle', 'Taxi', 'Public Bus', 'Private Bus', 'Military vehicle', 'Delivery Truck', 'Transport Truck', 'Motorcycle', 'Moped', 'Bicycle', 'Pedestrian', 'Farm Vehicle', 'Vehicle with water polluting load', 'Vehicle with explosive load', 'Vehicle with other dangerous load', 'Trolley Bus', 'Employee Vehicle', 'Light Rail', 'Facility Vehicle', 'School Bus', '4 Wheel Drive Vehicle', 'Vehicle carrying snow chains', 'Mail Vehicle', 'Tanker', 'Vehicle for disabled persons', 'User defined 00', 'User defined 01', 'User defined 02', 'User defined 03', 'User defined 04', 'User defined 05', 'User defined 06', 'User defined 07', 'User defined 08', 'User defined 09']
      }, {
        t: 'enum',
        ln: 'RouteMinimizeOptionEnum',
        vs: ['SHORTEST_DISTANCE', 'SHORTEST_TIME']
      }, {
        t: 'enum',
        ln: 'RouteHighwayUsageEnum',
        vs: ['PROHIBIT_HIGHWAYS', 'AVOID_HIGHWAYS', 'PREFER_HIGHWAYS', 'NO_PREFERENCE']
      }, {
        t: 'enum',
        ln: 'FetchDirectionType',
        vs: ['FetchForward', 'FetchBackward']
      }, {
        t: 'enum',
        ln: 'RouteTollUsageEnum',
        vs: ['PROHIBIT_TOLLROADS', 'AVOID_TOLLROADS', 'NO_PREFERENCE']
      }, {
        t: 'enum',
        ln: 'CursorTypeEnum',
        vs: ['RouteLinkAndCostType', 'MapObjType']
      }, {
        t: 'enum',
        ln: 'DateTimeEnum',
        vs: ['MAP_DAY_OF_WEEK', 'MAP_ABSOLUTE_DATE', 'MAP_DAY_OF_YEAR', 'MAP_DAY_OF_MONTH', 'MAP_DAY_OF_WEEK_OF_MONTH', 'MAP_DAY_OF_WEEK_OF_YEAR', 'MAP_WEEK_OF_MONTH', 'MAP_WEEK_OF_YEAR', 'MAP_MONTH_OF_YEAR', 'MAP_DAY_OF_MONTH_OF_YEAR', 'MAP_DAY_OF_WEEK_OF_MONTH_OF_YEAR']
      }, {
        t: 'enum',
        ln: 'CursorOriginEnum',
        vs: ['CURRENT_POSITION', 'RESULT_SET_START', 'RESULT_SET_END']
      }],
    eis: [{
        en: 'DetermineRouteResponse',
        ti: '.DetermineRouteResponseType',
        sh: {
          lp: '_ResponseParameters',
          ns: 'http:\/\/www.opengis.net\/xls'
        }
      }, {
        en: 'DetermineRouteRequest',
        ti: '.DetermineRouteRequestType',
        sh: {
          lp: '_RequestParameters',
          ns: 'http:\/\/www.opengis.net\/xls'
        }
      }, {
        en: 'GetNearbyMapObjRequest',
        ti: '.GetNearbyMapObjRequestType',
        sh: {
          lp: '_RequestParameters',
          ns: 'http:\/\/www.opengis.net\/xls'
        }
      }, {
        en: 'GetPositionRequest',
        ti: '.GetPositionRequestType',
        sh: {
          lp: '_RequestParameters',
          ns: 'http:\/\/www.opengis.net\/xls'
        }
      }, {
        en: 'GetPositionResponse',
        ti: '.GetPositionResponseType',
        sh: {
          lp: '_ResponseParameters',
          ns: 'http:\/\/www.opengis.net\/xls'
        }
      }, {
        en: 'GetNearbyMapObjResponse',
        ti: '.GetNearbyMapObjResponseType',
        sh: {
          lp: '_ResponseParameters',
          ns: 'http:\/\/www.opengis.net\/xls'
        }
      }]
  };
  return {
    OLS_NAV_1_3: OLS_NAV_1_3
  };
};
if (typeof define === 'function' && define.amd) {
  define([], OLS_NAV_1_3_Module_Factory);
}
else {
  var OLS_NAV_1_3_Module = OLS_NAV_1_3_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.OLS_NAV_1_3 = OLS_NAV_1_3_Module.OLS_NAV_1_3;
  }
  else {
    var OLS_NAV_1_3 = OLS_NAV_1_3_Module.OLS_NAV_1_3;
  }
}