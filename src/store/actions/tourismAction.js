import firebase from "firebase";
import uuid from "react-uuid";

export const createTourism = (tourism) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const idUser = getState().firebase.auth.uid;
    const emailUser = getState().firebase.auth.email;
    const name = tourism.name;
    const longitude = tourism.longitude;
    const latitude = tourism.latitude;
    const ticket = tourism.ticket;
    const subDistric = tourism.subDistric;
    const village = tourism.village;
    const description = tourism.description;
    const image = tourism.image;
    const idItem = uuid();

    firestore
      .collection("Tourisms")
      .add({
        ...tourism,
        country: "north lombok",
        kind: "natural",
        status: "not accepted",
        createdAt: new Date(),
        updatedAt:null,
        emailUser: emailUser,
        idUser: idUser,
        idItem: idItem,

        name: name,
        lating: new firebase.firestore.GeoPoint(
          parseFloat(latitude),
          parseFloat(longitude)
        ),
        subDistric: subDistric,
        village: village,
        ticket: parseInt(ticket),
        description: description,
        image: image,
      })
      .then(() => {
        dispatch({ type: "CREATE_TOURISM", tourism });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_TOURISM_ERROR", err });
      });

    console.log(tourism);
  };
};
export const createCulture = (tourism) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const idUser = getState().firebase.auth.uid;
    const emailUser = getState().firebase.auth.email;
    const name = tourism.name;
    const longitude = tourism.longitude;
    const latitude = tourism.latitude;
    const ticket = tourism.ticket;
    const subDistric = tourism.subDistric;
    const village = tourism.village;
    const description = tourism.description;
    const image = tourism.image;
    const idItem = uuid();

    firestore
      .collection("Tourisms")
      .add({
        ...tourism,
        country: "north lombok",
        kind: "culture",
        status: "not accepted",
        createdAt: new Date(),
        updatedAt:null,
        emailUser: emailUser,
        idUser: idUser,
        idItem: idItem,

        name: name,
        lating: new firebase.firestore.GeoPoint(
          parseFloat(latitude),
          parseFloat(longitude)
        ),
        subDistric: subDistric,
        village: village,
        ticket: parseInt(ticket),
        description: description,
        image: image,
      })
      .then(() => {
        dispatch({ type: "CREATE_TOURISM", tourism });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_TOURISM_ERROR", err });
      });

    console.log(tourism);
  };
};

export const createCulinary = (tourism) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const idUser = getState().firebase.auth.uid;
    const emailUser = getState().firebase.auth.email;
    const name = tourism.name;
    const longitude = tourism.longitude;
    const open = tourism.open;
    const close = tourism.close;
    const priceStart = tourism.priceStart;
    const priceEnd = tourism.PriceEnd;
    const latitude = tourism.latitude;
    const subDistric = tourism.subDistric;
    const village = tourism.village;
    const description = tourism.description;
    const image = tourism.image;
    const idItem = uuid();

    firestore
      .collection("Tourisms")
      .add({
        ...tourism,
        country: "north lombok",
        kind: "culinary",
        status: "not accepted",
        createdAt: new Date(),
        updatedAt:null,
        emailUser: emailUser,
        idUser: idUser,
        idItem: idItem,

        name: name,
        lating: new firebase.firestore.GeoPoint(
          parseFloat(latitude),
          parseFloat(longitude)
        ),
        subDistric: subDistric,
        village: village,
        description: description,
        open: open,
        close: close,
        priceStart: parseInt(priceStart),
        priceEnd: parseInt(priceEnd),
        image: image,
      })
      .then(() => {
        dispatch({ type: "CREATE_TOURISM", tourism });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_TOURISM_ERROR", err });
      });

    console.log(tourism);
  };
};

// export const updateAccept = (data) => {
//   return (dispatch, getState, { getFirebase, getFirestore }) => {
//     const data = data.data;
//     dispatch({ type: "UPDATE_TOURISM_SUCCESS", data });
//     console.log(data);
//   };
// };
