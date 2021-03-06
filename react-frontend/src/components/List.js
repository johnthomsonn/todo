import React, {useEffect, useState} from "react";
import "./List.css"
import {Redirect} from 'react-router-dom'

const List = props => {
  useEffect(() => {
    getList();
    //alert(props.user._id)
  }, []);

  const [list, setList] = useState({
    _id : "",
    name : "",
    items : [],
    redirect : false
  });

  const clickList = event => {
    const url = `/${props.user.username}/${list.name}`
    setList({...list, redirect : true})
  }

  if(list.redirect)
  {
    return <Redirect push to={{pathname : `/${props.user.username}/${list.name}`, user : props.user}} />
  }

  const uppercaseFirstLetter = word => word.replace(word.charAt(0), word.charAt(0).toUpperCase())



  const getList = () => {
    fetch(
      `${process.env.REACT_APP_SERVER_URL}/users/${props.match.params.username}/lists/listid/${props.listId}`,
      {
        method: "GET",
        mode: "cors",
        credentials: "include",
        headers: {
          Accept: "application/json"
        }
      }
    )
      .then(response => response.json())
      .then(data => setList({
          _id : data.list._id,
          name : data.list.name,
          items : data.list.items
      }))
      .catch(err =>
        console.log("ERROR getting individual list from id: " + err)
      );
  };

  return (
    <>
      <div className="list-summary-div" onClick={clickList}>
        <h2>{uppercaseFirstLetter(list.name)}</h2>
        <h4>#items: {list.items.length}</h4>



      </div>
    </>
  );
};

export default List;
