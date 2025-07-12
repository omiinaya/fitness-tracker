const Workout = require("../models/workout")
const { body, validationResult } = require('express-validator');

module.exports = function(app){ 
    //find
    app.get("/api/workouts",function(req,res){  
        Workout.find()
        .then(data =>{  
            res.json(data)
        })
        .catch(err => { 
            res.status(500).json({ error: 'Database error', details: err.message })
        })
    });
    app.get("/api/workouts/range",function(req,res){  
        Workout.find()
        .then(data =>{  
            res.json(data)
        })
        .catch(err => { 
            res.status(500).json({ error: 'Database error', details: err.message })
        })
    });
    //create
    app.post("/api/workouts",
      [
        body('exercises').optional().isArray(),
        body('exercises.*.type').optional().isString().trim().notEmpty(),
        body('exercises.*.name').optional().isString().trim().notEmpty(),
        body('exercises.*.duration').optional().isNumeric(),
        body('exercises.*.weight').optional().isNumeric(),
        body('exercises.*.reps').optional().isNumeric(),
        body('exercises.*.sets').optional().isNumeric(),
        body('exercises.*.distance').optional().isNumeric()
      ],
      function (req,res){    
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        Workout.create(req.body)
        .then(data => res.json(data))
        .catch(err => { 
            res.status(500).json({ error: 'Database error', details: err.message })
        })
    });
    app.post("/api/workouts/range",
      [
        body('exercises').optional().isArray(),
        body('exercises.*.type').optional().isString().trim().notEmpty(),
        body('exercises.*.name').optional().isString().trim().notEmpty(),
        body('exercises.*.duration').optional().isNumeric(),
        body('exercises.*.weight').optional().isNumeric(),
        body('exercises.*.reps').optional().isNumeric(),
        body('exercises.*.sets').optional().isNumeric(),
        body('exercises.*.distance').optional().isNumeric()
      ],
      function (req,res){    
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        Workout.create(req.body)
        .then(data => res.json(data))
        .catch(err => { 
            res.status(500).json({ error: 'Database error', details: err.message })
        })
    });
    //update
    app.put("/api/workouts/:id",
      [
        body('type').optional().isString().trim().notEmpty(),
        body('name').optional().isString().trim().notEmpty(),
        body('duration').optional().isNumeric(),
        body('weight').optional().isNumeric(),
        body('reps').optional().isNumeric(),
        body('sets').optional().isNumeric(),
        body('distance').optional().isNumeric()
      ],
      ({body,params},res)=>{   
        const errors = validationResult({ body });
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        Workout.findByIdAndUpdate(  
         params.id,
         {$push:{exercises:body} },
         {new: true,runValidators:true }
        )
        .then(data => res.json(data))
        .catch(err => { 
            res.status(500).json({ error: 'Database error', details: err.message })
        })
    });
}