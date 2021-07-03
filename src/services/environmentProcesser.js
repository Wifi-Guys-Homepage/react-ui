import applicationProperties from './../application.json';
import environmentProperties from './../environment.json';


function processUrl(url){
  return processVariable("urls")[processVariable('apis')[url]]

}

function processVariable(variableName){
  if (variableName in environmentProperties) {
    return environmentProperties[variableName]
  }
  if (variableName in applicationProperties) {
    return applicationProperties[variableName]
  }
  console.log(`Error Processing Variable ${variableName} Doesnt exist`)  //TODO better logging solution - react logger + connect to fastapi or django?
}

export { processUrl, processVariable };