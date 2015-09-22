(function(ui) {
    'use strict';

    /**
     * [Wizard description]
     * @param {[type]} containerElemenet [description]
     * @param {[type]} options           [description]
     */
    ui.Wizard = function(containerElemenet, options) {
        var _wizard = this;

        _wizard.IsStarted = false;
        _wizard.IsComplated = false;

        _wizard.FirstStepIndex = 0;
        _wizard.CurrentStepIndex = undefined;
        _wizard.LastStepIndex = undefined;

        _wizard.Steps = null;
        _wizard.Output = null; // x LoopCount

        _wizard.AddStep = function() {

        };

        _wizard.DefineLoop = function(loopCount) {

        };

        _wizard.Next = function() {
            var currentStep = _wizard.Steps['Step' + _wizard.CurrentStepIndex];
            if (currentStep) {
                currentStep.Next();
            }

            var nextStep = _wizard.Steps['Step' + _wizard.CurrentStepIndex + 1];
            if (nextStep) {
                nextStep();
            }
        };

        _wizard.Back = function() {
            var currentStep = _wizard.Steps['Step' + _wizard.CurrentStepIndex];
            if (currentStep) {
                currentStep.Next();
            }

            var nextStep = _wizard.Steps['Step' + _wizard.CurrentStepIndex - 1];
            if (nextStep) {
                nextStep();
            }
        };
    };

    /**
     * [Step description]
     * @param {[type]} options [description]
     */
    ui.Step = function(options) {
        var _step = this;

        _step.WorkPath = undefined;
        _step.Data = null;
        _step.State = undefined; // [NOT_STARTED, NOT_COMPLATED, STARTED, COMPLATED]
        _step.Order = undefined;
        _step.IsStarted = false;
        _step.IsComplated = false;

        _step.Initializer = null; // func;
        _step.Complater = null; // func;
        _step.Clear = null; // func;

        _step.Next = function() {

        };

        _step.Back = function() {

        };
    };

})(window.TalentedUI);
