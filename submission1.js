// Returns a function that counts a specific letter in a word.
let letterCounter = function (letter, ignoreCapitalization) {

    return function (word) {
        let count = 0;

        if (ignoreCapitalization) {
            letter = letter.toLowerCase();
            word = word.toLowerCase();
        }

        for (let i = 0; i < word.length; i++) {
            if (word[i] === letter) {
                count++;
            }
        }

        return count;
    };
};


// Creates a character with farming and fishing skills.
function makeCharacter(characterName) {

    let farmingSkill = 0;
    let fishingSkill = 0;

    // Increases a valid skill up to 10.
    let levelUp = function (skill) {

        if (skill === "farming" && farmingSkill < 10) {
            farmingSkill++;
        }

        if (skill === "fishing" && fishingSkill < 10) {
            fishingSkill++;
        }
    };

    // Returns the requested skill level.
    let showSkill = function (skill) {

        if (skill === "farming") {
            return farmingSkill;
        }

        if (skill === "fishing") {
            return fishingSkill;
        }
    };

    return {
        name: characterName,
        levelUp,
        showSkill
    };
}


// Calculates the average grade after late penalties.
function summarizeGrades(assignments) {

    let sum = 0;
    const count = assignments.length;
    const LATE_PENALTY_PER_DAY = 20;

    let assignment;

    for (let i = 0; i < count; i++) {

        assignment = assignments[i];
        let grade = assignment.grade;

        if (assignment.daysLate > 0) {
            const latePenalty = assignment.daysLate * LATE_PENALTY_PER_DAY;

            grade = grade - latePenalty >= 0
                ? grade - latePenalty
                : 0;
        }

        sum += grade;
    }

    const lastGraded = assignment;

    return {
        average: sum / count,
        lastGraded: lastGraded.id
    };
}