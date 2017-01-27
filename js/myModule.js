var demoApp = angular.module('demoApp', ['ngRoute']);

demoApp.config(function ($routeProvider){
    $routeProvider
		.when('/',
			{
			    controller: '',
			    templateUrl: 'partials/home.html'
			})
		.when('/View1',
			{
			    controller: 'SimpleController',
			    templateUrl: 'partials/View1.html'
			})
		.when('/CharacterBuilder',
			{
			    controller: 'CharacterBuilderController',
			    templateUrl: 'partials/CharacterBuilder.html'
			})
		.otherwise({redirectTo:'/'});
})
    //Character Builder code
.factory('CharacterBuilderFactory', function () {
    var factory = {};

    var races = [
		{ name: 'Dwarf: Hill', str: 0, dex: 0, con: 2, int: 0, wis: 1, cha: 0 },
		{ name: 'Dwarf: Mountain', str: 2, dex: 0, con: 2, int: 0, wis: 0, cha: 0 },
		{ name: 'Elf: High', str: 0, dex: 2, con: 0, int: 1, wis: 0, cha: 0 },
		{ name: 'Elf: Wood', str: 0, dex: 2, con: 0, int: 0, wis: 1, cha: 0 },
		{ name: 'Halfling: Lightfoot', str: 0, dex: 2, con: 0, int: 0, wis: 0, cha: 1 },
		{ name: 'Halfling: Stout', str: 0, dex: 2, con: 1, int: 0, wis: 0, cha: 0 },
		{ name: 'Human', str: 1, dex: 1, con: 1, int: 1, wis: 1, cha: 1 }
    ];
    var backgrounds = [
        { name: 'Acolyte', proficiency: ['Insight', 'Religion'] },
        { name: 'Criminal', proficiency: ['Deception', 'Stealth'] },
        { name: 'Folk Hero', proficiency: ['Animal Handling', 'Survival'] },
        { name: 'Noble', proficiency: ['History', 'Persuasion'] },
        { name: 'Sage', proficiency: ['Arcana', 'History'] },
        { name: 'Soldier', proficiency: ['Athletics', 'Intimidation'] }
    ];
    var classes = [
        {
            name: 'Cleric', armor: ['Scale Mail', 'Leather', 'Chain Mail', 'Shield'], health: 8, healthPerLevel: 5, saves: ['Wis', 'Cha'],
            skillsAvailable: ['History', 'Insight', 'Medicine', 'Persuasion', 'Religion'], skillAmount: 2
        },
        {
            name: 'Fighter', armor: ['Chain Mail', 'Leather', 'Shield'], health: 10, healthPerLevel: 6, saves: ['Str', 'Con'],
            skillsAvailable: ['Acrobatics', 'Animal Handling', 'Athletics', 'History', 'Insight', 'Intimidation', 'Perception', 'Survival'], skillAmount: 2
        },
        {
            name: 'Rogue', armor: ['Leather'], health: 8, healthPerLevel: 5, saves: ['Dex', 'Int'],
            skillsAvailable: ['Acrobatics', 'Athletics', 'Deception', 'Insight', 'Intimidation', 'Investigation', 'Perception', 'Performance', 'Persuasion', 'Sleight of Hand', 'Stealth'], skillAmount: 4
        },
        {
            name: 'Wizard', armor: [], health: 6, healthPerLevel: 4, saves: ['Int', 'Wis'],
            skillsAvailable: ['Arcana', 'History', 'Insight', 'Investigation', 'Medicine', 'Religion'], skillAmount: 2
        }
    ];
    var levels = [
        { level: 1, proficiencyBonus: 2 },
        { level: 2, proficiencyBonus: 2 },
        { level: 3, proficiencyBonus: 2 },
        { level: 4, proficiencyBonus: 2 },
        { level: 5, proficiencyBonus: 3 },
        { level: 6, proficiencyBonus: 3 },
        { level: 7, proficiencyBonus: 3 },
        { level: 8, proficiencyBonus: 3 },
        { level: 9, proficiencyBonus: 4 },
        { level: 10, proficiencyBonus: 4 },
        { level: 11, proficiencyBonus: 4 },
        { level: 12, proficiencyBonus: 4 },
        { level: 13, proficiencyBonus: 5 },
        { level: 14, proficiencyBonus: 5 },
        { level: 15, proficiencyBonus: 5 },
        { level: 16, proficiencyBonus: 5 },
        { level: 17, proficiencyBonus: 6 },
        { level: 18, proficiencyBonus: 6 },
        { level: 19, proficiencyBonus: 6 },
        { level: 20, proficiencyBonus: 6 }
    ];
    var armors = [
        { name: 'Padded', type: 'light', ac: 11, dex: 'full', stealthDisadvantage: 1, strRequired: 0},
        { name: 'Leather', type: 'light', ac: 11, dex: 'full', stealthDisadvantage: 0, strRequired: 0 },
        { name: 'Studded Leather', type: 'light', ac: 12, dex: 'full', stealthDisadvantage: 0, strRequired: 0 },
        { name: 'Hide', type: 'medium', ac: 12, dex: 'limit', stealthDisadvantage: 0, strRequired: 0 },
        { name: 'Chain Shirt', type: 'medium', ac: 13, dex: 'limit', stealthDisadvantage: 0, strRequired: 0 },
        { name: 'Scale Mail', type: 'medium', ac: 14, dex: 'limit', stealthDisadvantage: 1, strRequired: 0 },
        { name: 'Breastplate', type: 'medium', ac: 14, dex: 'limit', stealthDisadvantage: 0, strRequired: 0 },
        { name: 'Half Plate', type: 'medium', ac: 12, dex: 'limit', stealthDisadvantage: 1, strRequired: 0 },
        { name: 'Ring Mail', type: 'heavy', ac: 14, dex: 'none', stealthDisadvantage: 1, strRequired: 0 },
        { name: 'Chain Mail', type: 'heavy', ac: 16, dex: 'none', stealthDisadvantage: 1, strRequired: 13 },
        { name: 'Splint', type: 'heavy', ac: 17, dex: 'none', stealthDisadvantage: 1, strRequired: 15 },
        { name: 'Plate', type: 'heavy', ac: 18, dex: 'none', stealthDisadvantage: 1, strRequired: 15 }
    ];
    var stats = [
        { name: '15', value: 15 },
        { name: '14', value: 14 },
        { name: '13', value: 13 },
        { name: '12', value: 12 },
        { name: '10', value: 10 },
        { name: '8', value: 8 }
    ];
    var skills = [
        { name: 'Acrobatics', determiningStat: 'Dex' },
        { name: 'Animal Handling', determiningStat: 'Wis' },
        { name: 'Arcana', determiningStat: 'Int' },
        { name: 'Athletics', determiningStat: 'Str' },
        { name: 'Deception', determiningStat: 'Cha' },
        { name: 'History', determiningStat: 'Int' },
        { name: 'Insight', determiningStat: 'Wis' },
        { name: 'Intimidation', determiningStat: 'Cha' },
        { name: 'Investigation', determiningStat: 'Int' },
        { name: 'Medicine', determiningStat: 'Wis' },
        { name: 'Nature', determiningStat: 'Int' },
        { name: 'Perception', determiningStat: 'Wis' },
        { name: 'Performance', determiningStat: 'Cha' },
        { name: 'Persuasion', determiningStat: 'Cha' },
        { name: 'Religion', determiningStat: 'Int' },
        { name: 'Sleight of Hand', determiningStat: 'Dex' },
        { name: 'Stealth', determiningStat: 'Dex' },
        { name: 'Survival', determiningStat: 'Wis' }
    ];
    var packs = [
        {name: '', items: ''},
    ];

    factory.getRaces = function () {
        return races;
    };
    factory.getBackgrounds = function () {
        return backgrounds;
    };
    factory.getClasses = function () {
        return classes;
    };
    factory.getLevels = function () {
        return levels;
    };
    factory.getArmors = function () {
        return armors;
    };
    factory.getStats = function () {
        return stats;
    };
    factory.getSkills = function () {
        return skills;
    };

    return factory;
})
.controller('CharacterBuilderController', function ($scope, CharacterBuilderFactory) {
    $scope.clericChoiceClass = 'lf-Choices-hide';
    $scope.fighterChoiceClass = 'lf-Choices-hide';
    $scope.rogueChoiceClass = 'lf-Choices-hide';
    $scope.wizardChoiceClass = 'lf-Choices-hide';
    $scope.selectedAcrobatics = 0;
    $scope.selectedAnimalHandling = 0;
    $scope.selectedArcana = 0;
    $scope.selectedAthletics = 0;
    $scope.selectedDeception = 0;
    $scope.selectedHistory = 0;
    $scope.selectedInsight = 0;
    $scope.selectedIntimidation = 0;
    $scope.selectedInvestigation = 0;
    $scope.selectedMedicine = 0;
    $scope.selectedNature = 0;
    $scope.selectedPerception = 0;
    $scope.selectedPerformance = 0;
    $scope.selectedPersuasion = 0;
    $scope.selectedReligion = 0;
    $scope.selectedSleightOfHand = 0;
    $scope.selectedStealth = 0;
    $scope.selectedSurvival = 0;

    $scope.races = CharacterBuilderFactory.getRaces();
    $scope.backgrounds = CharacterBuilderFactory.getBackgrounds();
    $scope.classes = CharacterBuilderFactory.getClasses();
    $scope.levels = CharacterBuilderFactory.getLevels();
    $scope.armors = CharacterBuilderFactory.getArmors();
    $scope.stats = CharacterBuilderFactory.getStats();
    $scope.skills = CharacterBuilderFactory.getSkills();

    $scope.checkClass = function () {
        if ($scope.selectedClass != null) {
            switch ($scope.selectedClass.name) {
                case 'Cleric':
                    $scope.fighterChoiceClass = 'lf-Choices-hide';
                    $scope.rogueChoiceClass = 'lf-Choices-hide';
                    $scope.wizardChoiceClass = 'lf-Choices-hide';
                    $scope.clericChoiceClass = 'lf-Choices';
                    break;
                case 'Fighter':
                    $scope.clericChoiceClass = 'lf-Choices-hide';
                    $scope.rogueChoiceClass = 'lf-Choices-hide';
                    $scope.wizardChoiceClass = 'lf-Choices-hide';
                    $scope.fighterChoiceClass = 'lf-Choices';
                    break;
                case 'Rogue':
                    $scope.clericChoiceClass = 'lf-Choices-hide';
                    $scope.fighterChoiceClass = 'lf-Choices-hide';
                    $scope.wizardChoiceClass = 'lf-Choices-hide';
                    $scope.rogueChoiceClass = 'lf-Choices';
                    break;
                case 'Wizard':
                    $scope.clericChoiceClass = 'lf-Choices-hide';
                    $scope.fighterChoiceClass = 'lf-Choices-hide';
                    $scope.rogueChoiceClass = 'lf-Choices-hide';
                    $scope.wizardChoiceClass = 'lf-Choices';
                    break;
            }
            $scope.clearProficiencies();
        }
    };

    $scope.checkStatSelection = function () {
        //set defaults 
        var selectedStr = -1;
        var selectedDex = -2;
        var selectedCon = -3;
        var selectedInt = -4;
        var selectedWis = -5;
        var selectedCha = -6;

        //try to get values if they exist becuase defaulting these doesn't seem to work
        try { selectedStr = $scope.selectedStr.value; } catch (ex) { }
        try { selectedDex = $scope.selectedDex.value; } catch (ex) { }
        try { selectedCon = $scope.selectedCon.value; } catch (ex) { }
        try { selectedInt = $scope.selectedInt.value; } catch (ex) { }
        try { selectedWis = $scope.selectedWis.value; } catch (ex) { }
        try { selectedCha = $scope.selectedCha.value; } catch (ex) { }

        //check str
        if (selectedStr == selectedDex || selectedStr == selectedWis
            || selectedStr == selectedCon || selectedStr == selectedCha
            || selectedStr == selectedInt)
            $scope.selectedStrClass = 'lf-stat-error';
        else
            $scope.selectedStrClass = '';
        //check dex
        if (selectedDex == selectedStr || selectedDex == selectedWis
            || selectedDex == selectedCon || selectedDex == selectedCha
            || selectedDex == selectedInt)
            $scope.selectedDexClass = 'lf-stat-error';
        else
            $scope.selectedDexClass = '';
        //check con
        if (selectedCon == selectedStr || selectedCon == selectedWis
            || selectedCon == selectedDex || selectedCon == selectedCha
            || selectedCon == selectedInt)
            $scope.selectedConClass = 'lf-stat-error';
        else
            $scope.selectedConClass = '';
        //check int
        if (selectedInt == selectedStr || selectedInt == selectedWis
            || selectedInt == selectedDex || selectedInt == selectedCha
            || selectedInt == selectedCon)
            $scope.selectedIntClass = 'lf-stat-error';
        else
            $scope.selectedIntClass = '';
        //check wis
        if (selectedWis == selectedStr || selectedWis == selectedInt
            || selectedWis == selectedDex || selectedWis == selectedCha
            || selectedWis == selectedCon)
            $scope.selectedWisClass = 'lf-stat-error';
        else
            $scope.selectedWisClass = '';
        //check cha
        if (selectedCha == selectedStr || selectedCha == selectedInt
            || selectedCha == selectedDex || selectedCha == selectedWis
            || selectedCha == selectedCon)
            $scope.selectedChaClass = 'lf-stat-error';
        else
            $scope.selectedChaClass = '';
    };

    $scope.totalStr = function () {
        if ($scope.selectedStr != null && $scope.selectedRace != null) {
            return $scope.selectedStr.value + $scope.selectedRace.str;
        }
        return 0;
    };
    $scope.totalDex = function () {
        if ($scope.selectedDex != null && $scope.selectedRace != null) {
            return $scope.selectedDex.value + $scope.selectedRace.dex;
        }
        return 0;
    };
    $scope.totalCon = function () {
        if ($scope.selectedCon != null && $scope.selectedRace != null) {
            return $scope.selectedCon.value + $scope.selectedRace.con;
        }
        return 0;
    };
    $scope.totalInt = function () {
        if ($scope.selectedInt != null && $scope.selectedRace != null) {
            return $scope.selectedInt.value + $scope.selectedRace.int;
        }
        return 0;
    };
    $scope.totalWis = function () {
        if ($scope.selectedWis != null && $scope.selectedRace != null) {
            return $scope.selectedWis.value + $scope.selectedRace.wis;
        }
        return 0;
    };
    $scope.totalCha = function () {
        if ($scope.selectedCha != null && $scope.selectedRace != null) {
            return $scope.selectedCha.value + $scope.selectedRace.cha;
        }
        return 0;
    };

    $scope.strMod = function () {
        selectedStr = 0;
        raceStr = 0;
        if ($scope.selectedStr != null && $scope.selectedRace != null) {
            selectedStr = $scope.selectedStr.value;
            raceStr = $scope.selectedRace.str;

            output = (((raceStr + selectedStr) - 10) / 2);
            return Math.floor(output);
        }
        return 0;
    };
    $scope.dexMod = function () {
        selectedDex = 0;
        raceDex = 0;
        if ($scope.selectedDex != null && $scope.selectedRace != null) {
            selectedDex = $scope.selectedDex.value;
            raceDex = $scope.selectedRace.dex;

            output = (((raceDex + selectedDex) - 10) / 2);
            return Math.floor(output);
        }
        return 0;
    };
    $scope.conMod = function () {
        selectedCon = 0;
        raceCon = 0;
        if ($scope.selectedCon != null && $scope.selectedRace != null) {
            selectedCon = $scope.selectedCon.value;
            raceCon = $scope.selectedRace.con;

            output = (((raceCon + selectedCon) - 10) / 2);
            return Math.floor(output);
        }
        return 0;
    };
    $scope.intMod = function () {
        selectedInt = 0;
        raceInt = 0;
        if ($scope.selectedInt != null && $scope.selectedRace != null) {
            selectedInt = $scope.selectedInt.value;
            raceInt = $scope.selectedRace.int;

            output = (((raceInt + selectedInt) - 10) / 2);
            return Math.floor(output);
        }
        return 0;
    };
    $scope.wisMod = function () {
        selectedWis = 0;
        raceWis = 0;
        if ($scope.selectedWis != null && $scope.selectedRace != null) {
            selectedWis = $scope.selectedWis.value;
            raceWis = $scope.selectedRace.wis;

            output = (((raceWis + selectedWis) - 10) / 2);
            return Math.floor(output);
        }
        return 0;
    };
    $scope.chaMod = function () {
        selectedCha = 0;
        raceCha = 0;
        if ($scope.selectedCha != null && $scope.selectedRace != null) {
            selectedCha = $scope.selectedCha.value;
            raceCha = $scope.selectedRace.cha;

            output = (((raceCha + selectedCha) - 10) / 2);
            return Math.floor(output);
        }
        return 0;
    };

    $scope.displayMod = function (input) {
        if (input > 0)
            return "+" + input
        else
            return input;
    };

    $scope.maxHealth = function () {
        classHealth = 0;
        classHealthPer = 0;
        conBonus = 0;
        level = 1;

        try { classHealth = $scope.selectedClass.health; } catch (eexx) { }
        try { classHealthPer = $scope.selectedClass.healthPerLevel; } catch (ex) { }
        try { conBonus = $scope.conMod(); } catch (ex) { }
        try { level = $scope.selectedLevel.level; } catch (ex) { }

        output = classHealth + (conBonus * level) + (classHealthPer * level) - classHealthPer;
        return output;
    };
    $scope.calculateAC = function () {
        if ($scope.selectedDex != null && $scope.selectedRace != null) {
            var shield = 0;
            if ($scope.selectedArmor != null) {
                var armor = $scope.selectedArmor;
                if ($scope.selectedShield)
                    shield = 2;
                switch (armor.dex) {
                    case 'full':
                        return armor.ac + $scope.dexMod() + shield;
                        break;
                    case 'limit':
                        if ($scope.dexMod() > 2)
                            return armor.ac + 2 + shield;
                        else
                            return armor.ac + $scope.dexMod() + shield;
                        break;
                    case 'none':
                        return armor.ac + shield;
                        break;
                }
            }
            else {
                return 10 + $scope.dexMod() + shield;
            }
        }
        else
            return 0;
    };

    $scope.checkSkillProficiency = function (skill) {
        if ($scope.selectedBackground != null && skill != null) {
            var background = $scope.selectedBackground.proficiency;
            var skills = '';
            for (var i = 0; i < background.length; i++) {
                if (skill == background[i] || $scope.proficiencyChecked(skill))
                    return 'x';
            }
            return "-";
        }
        else
            return '-';
    };
    $scope.skillMod = function (skill) {
        if (skill != null && $scope.selectedBackground != null) {
            var level = 1;
            var prof = 2;
            var background = $scope.selectedBackground.proficiency;

            if ($scope.selectedLevel != null) {
                level = $scope.selectedLevel.level;
                prof = $scope.selectedLevel.proficiencyBonus;
            }

            switch (skill.determiningStat) {
                case 'Str':
                    if ($scope.checkSkillProficiency(skill.name) == 'x')
                        return $scope.displayMod($scope.strMod() + prof);
                    else
                        return $scope.displayMod($scope.strMod());
                    break;
                case 'Dex':
                    if ($scope.checkSkillProficiency(skill.name) == 'x')
                        return $scope.displayMod($scope.dexMod() + prof);
                    else
                        return $scope.displayMod($scope.dexMod());
                    break;
                case 'Con':
                    if ($scope.checkSkillProficiency(skill.name) == 'x')
                        return $scope.displayMod($scope.conMod() + prof);
                    else
                        return $scope.displayMod($scope.conMod());
                    break;
                case 'Int':
                    if ($scope.checkSkillProficiency(skill.name) == 'x')
                        return $scope.displayMod($scope.intMod() + prof);
                    else
                        return $scope.displayMod($scope.intMod());
                    break;
                case 'Wis':
                    if ($scope.checkSkillProficiency(skill.name) == 'x')
                        return $scope.displayMod($scope.wisMod() + prof);
                    else
                        return $scope.displayMod($scope.wisMod());
                    break;
                case 'Cha':
                    if ($scope.checkSkillProficiency(skill.name) == 'x')
                        return $scope.displayMod($scope.chaMod() + prof);
                    else
                        return $scope.displayMod($scope.chaMod());
                    break;
            }
        }
        else
            return 0;
    };
    $scope.filterArmor = function (armor) {
        if ($scope.selectedClass != null && $scope.selectedStr != null && $scope.selectedDex != null && $scope.selectedRace != null) {
            var output = false;
            for (var i = 0; i < $scope.selectedClass.armor.length; i++) {
                if (armor.name == $scope.selectedClass.armor[i] && armor.strRequired <= $scope.totalStr())
                    output = true;
            }
            return output;
        }
        return false;
    };
    $scope.disableShield = function () {
        if ($scope.selectedClass != null) {
            var output = true;
            for (var i = 0; i < $scope.selectedClass.armor.length; i++) {
                if ($scope.selectedClass.armor[i] == 'Shield')
                    output = false;
            }
            return output;
        }
        return true;
    };

    $scope.choicesRemaining = function () {
        if ($scope.selectedClass != null) {
            var output = $scope.selectedClass.skillAmount -
            $scope.selectedAcrobatics -
            $scope.selectedAnimalHandling -
            $scope.selectedArcana -
            $scope.selectedAthletics -
            $scope.selectedDeception -
            $scope.selectedHistory -
            $scope.selectedInsight -
            $scope.selectedIntimidation -
            $scope.selectedInvestigation -
            $scope.selectedMedicine -
            $scope.selectedNature -
            $scope.selectedPerception -
            $scope.selectedPerformance -
            $scope.selectedPersuasion -
            $scope.selectedReligion -
            $scope.selectedSleightOfHand -
            $scope.selectedStealth -
            $scope.selectedSurvival;
            return output;
        }
        return 0;
    }
    $scope.disableProficiency = function (skill) {
        if ($scope.selectedClass != null && $scope.selectedBackground != null) {
            var output = true;
            for (var i = 0; i < $scope.selectedClass.skillsAvailable.length; i++) {
                if ($scope.selectedClass.skillsAvailable[i] == skill)
                    output = false;
            }
            for (var i = 0; i < $scope.selectedBackground.proficiency.length; i++) {
                if ($scope.selectedBackground.proficiency[i] == skill)
                    output = true;
            }
            return output;
        }
        return true;
    };
    $scope.proficiencyClass = function (disabled) {
        if(disabled != null){
            if (disabled)
                return 'lf-proficiency-disabled';
            else
                return 'lf-proficiency-enabled';
        }
        return '';
    };
    $scope.proficiencyChecked = function (skill) {
        switch (skill) {
            case 'Acrobatics': return $scope.selectedAcrobatics;
                break;
            case 'Animal Handling': return $scope.selectedAnimalHandling;
                break;
            case 'Arcana': return $scope.selectedArcana;
                break;
            case 'Athletics': return $scope.selectedAthletics;
                break;
            case 'Deception': return $scope.selectedDeception;
                break;
            case 'History': return $scope.selectedHistory;
                break;
            case 'Insight': return $scope.selectedInsight;
                break;
            case 'Intimidation': return $scope.selectedIntimidation;
                break;
            case 'Investigation': return $scope.selectedInvestigation;
                break;
            case 'Medicine': return $scope.selectedMedicine;
                break;
            case 'Nature': return $scope.selectedNature;
                break;
            case 'Perception': return $scope.selectedPerception;
                break;
            case 'Performance': return $scope.selectedPerformance;
                break;
            case 'Persuasion': return $scope.selectedPersuasion;
                break;
            case 'Religion': return $scope.selectedReligion;
                break;
            case 'Sleight of Hand': return $scope.selectedSleightOfHand;
                break;
            case 'Stealth': return $scope.selectedStealth;
                break;
            case 'Survival': return $scope.selectedSurvival;
                break;
        }
        return false;
    };
    $scope.clearProficiencies = function () {
        $scope.selectedAcrobatics = 0;
        $scope.selectedAnimalHandling = 0;
        $scope.selectedArcana = 0;
        $scope.selectedAthletics = 0;
        $scope.selectedDeception = 0;
        $scope.selectedHistory = 0;
        $scope.selectedInsight = 0;
        $scope.selectedIntimidation = 0;
        $scope.selectedInvestigation = 0;
        $scope.selectedMedicine = 0;
        $scope.selectedNature = 0;
        $scope.selectedPerception = 0;
        $scope.selectedPerformance = 0;
        $scope.selectedPersuasion = 0;
        $scope.selectedReligion = 0;
        $scope.selectedSleightOfHand = 0;
        $scope.selectedStealth = 0;
        $scope.selectedSurvival = 0;
    }
})

    //simple example code
.factory('SimpleFactory', function () {
    var factory = {};
    var customers = [
		{ name: 'Maggie', city: 'Bismarck' },
		{ name: 'Jacob', city: 'Mandan' },
		{ name: 'Bo', city: 'Lincoln' }
    ];

    factory.getCustomers = function(){
        return customers;
    };

    return factory;
})
.controller('SimpleController', function ($scope, SimpleFactory) {
    $scope.customers = SimpleFactory.getCustomers();
	$scope.addCustomer = function() {
		$scope.customers.push(
			{name: $scope.newCustomer.name, city: $scope.newCustomer.city}
		);
	};
})
;