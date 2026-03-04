import { useState } from "react";
import MainHeader from "./components/MainHeader";
import PostsList from "./components/PostsList";

function App() {
  const [modalVisible, setModalVisible] = useState(false);

  function showModalHandler() {
		setModalVisible(true);
	}

  function hideModalHandler() {
		setModalVisible(false);
	}

  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostsList isPosting={modalVisible} onStopPosting={hideModalHandler} />
      </main>
    </>
  );
}

export default App;
