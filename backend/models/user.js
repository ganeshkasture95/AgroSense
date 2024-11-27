const mongoose = require('mongoose');

const SensorDataSchema = new mongoose.Schema({
    sensorType: { type: String, required: true }, // e.g., temperature, humidity, pH
    value: { type: Number, required: true },
    timestamp: { type: Date, default: Date.now }
});

const DiseaseDetectionSchema = new mongoose.Schema({
    image: { type: String, required: true }, // URL or file path
    diagnosis: { type: String }, // Result of the Keras model
    prescription: { type: String }, // Recommended action
    detectedAt: { type: Date, default: Date.now }
});

const FarmerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // Consider hashing passwords
    verified: {
        type: Boolean,
        default: false,
    },
    verificationToken: String,
    fields: [
        {
            location: { type: String, required: true }, // GPS coordinates or description
            sensors: [SensorDataSchema] // Array of sensor data
        }
    ],
    weatherPreferences: {
        location: { type: String }, // City or GPS coordinates
        lastUpdated: { type: Date, default: Date.now }
    },
    diseaseDetections: [DiseaseDetectionSchema], // Records of disease detection
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});



const User = mongoose.model('Farmer', FarmerSchema);

module.exports = User

