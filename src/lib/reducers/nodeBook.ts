import { DispatchNodeBookActions, NodeBookState } from "../../nodeBookTypes";

export const INITIAL_STATE: NodeBookState = {
  sNode: null,
  isSubmitting: false,
  choosingNode: null,
  chosenNode: null,
  selectedNode: null,
  selectionType: null,
  selectedTags: [],
  // choosingType: null,
};

function nodeBookReducer(state: NodeBookState, action: DispatchNodeBookActions): NodeBookState {
  switch (action.type) {
    case "setSNode":
      return { ...state, sNode: action.payload };
    case "setIsSubmitting":
      return { ...state, isSubmitting: action.payload };
    case "setChoosingNode":
      return { ...state, choosingNode: action.payload };
    case "setChosenNode":
      return { ...state, chosenNode: action.payload };
    case "setSelectedNode":
      return { ...state, selectedNode: action.payload };
    case "setSelectionType":
      return { ...state, selectionType: action.payload };
    case "setSelectedTags":
      return { ...state, selectedTags: action.payload };
    // case "setChoosingType":
    //   return { ...state, choosingType: action.payload };
    default:
      return { ...state };
  }
}

export default nodeBookReducer;
