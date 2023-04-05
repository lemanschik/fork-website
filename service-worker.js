// Switch Environment conditional export
export const channel = new BroadcastChannel("serviceWorker");
// { id, method(parm1,parm2), parameters[1,"2"]}
channel.onmessage = (event) => 
channel.postMessage({ id: event.data.id, value: new Function(event.data.method).call(globalThis,event.data.params), done: true });
