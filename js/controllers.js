'use strict';

/* Controllers */

var addNewEntry = angular.module('addNewEntry', ['xeditable']);

        addNewEntry.run(function(editableOptions) {
        editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
        });

        addNewEntry.controller("newEntryCtrl", ['$scope', function ($scope) {
            $scope.persons = [];

 
            $scope.addNewPerson = function () {

                $scope.tableHead = true;
                $scope.tableFilter = true;

                $scope.persons.push({
                    name: $scope.personName,
                    superpower: $scope.superPower,
                    rich: $scope.rich,
                    genius: $scope.genius,

                });

                $scope.personName = "";
                $scope.superPower = false;
                $scope.rich = false;
                $scope.genius = false;
            }

            $scope.reverse = true;
            $scope.order = function(predicate) {
                $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
                $scope.predicate = predicate;
            };



            $scope.$watch('persons', function(persons){
                $scope.superpower_count = 0;
                $scope.rich_count = 0;
                $scope.genius_count = 0;
                angular.forEach(persons, function(person){
                    if(person.superpower){
                        $scope.superpower_count += 1; 
                    }
                    if(person.rich){
                        $scope.rich_count += 1; 
                    }
                    if(person.genius){
                        $scope.genius_count += 1; 
                    }
                })
            }, true);


            $scope.isCheckSuper = function() {
                    for(var e in $scope.persons) {
                         var checkBox = $scope.persons[e];
                        if(checkBox.superpower)
                            return false;
                    }
                   return true;
            };

            $scope.isCheckRich = function() {
                    for(var e in $scope.persons) {
                         var checkBox = $scope.persons[e];
                        if(checkBox.rich)
                            return false;
                    }
                   return true;
            };
            $scope.isCheckGenius = function() {
                    for(var e in $scope.persons) {
                         var checkBox = $scope.persons[e];
                        if(checkBox.genius)
                            return false;
                    }
                   return true;
            };

        }]); 

