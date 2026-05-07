// @ts-check

export class ArgumentError extends Error {
constructor(message) {
    super(message);
    this.name = 'ArgumentError';
  }
}

export class OverheatingError extends Error {
  constructor(temperature) {
    super(`Overheating: ${temperature}°C`);
    this.name = 'OverheatingError';
    this.temperature = temperature;
  }
}


export function checkHumidityLevel(humidityPercentage) {
  if (humidityPercentage > 70 ) {
    throw new Error ('Humidity level too high');
    
  }
}


export function reportOverheating(temperature) {
 if (temperature === null) {
   throw new ArgumentError('Sensor broken');
 } else if(temperature > 500) {
   throw new OverheatingError(temperature);
 }
}


export function monitorTheMachine(actions) {
  try {
    actions.check();
  } catch (error) {
    if (error instanceof ArgumentError) {
      actions.alertDeadSensor();
    } else if (error instanceof OverheatingError) {
      if (error.temperature < 600) {
        actions.alertOverheating();
      } else {
        actions.shutdown();
      }
    } else {
      throw error;
    }
  }
} 
    
  

