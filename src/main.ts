interface Success {
  res: 'success';
  data: {a: 1}
}
interface Fail {
  res: 'error';
  erroMessage: string
}

type ResType = Fail | Success

function isResSucces(res: ResType): res is Success {
  if(res.res === "success") {
    return true;
  }
  return false
}

function process(res: ResType) {
  if(isResSucces(res)) {
    res.data
  } else {
    res.erroMessage
  }
}

