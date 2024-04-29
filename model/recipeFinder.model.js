import mongoose from 'mongoose';

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  minutes: {
    type: String,
    required: true
  },
  tags: {
    type: [String],
    required: true,
    validate: {
      validator: function(v) {
        return v && v.length > 0;
      },
      message: 'At least one tag is required'
    }
  },
  nutrition: {
    type: [Number],
    required: true,
    validate: {
      validator: function(v) {
        return v && v.length === 7;
      },
      message: 'Nutrition array must have length 7'
    }
  },
  n_steps: {
    type: String,
    required: true
  },
  steps: {
    type: [String],
    required: true,
    validate: {
      validator: function(v) {
        return v && v.length > 0;
      },
      message: 'At least one step is required'
    }
  },
  description: {
    type: String,
    required: true
  },
  ingredients: {
    type: [String],
    required: true,
    validate: {
      validator: function(v) {
        return v && v.length > 0;
      },
      message: 'At least one ingredient is required'
    }
  },
  n_ingredients: {
    type: Number,
    required: true
  }
});

export const Recipe = mongoose.model('Recipe', recipeSchema);

