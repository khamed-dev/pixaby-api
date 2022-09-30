import { useContext } from "react";
import { InputContext } from '../contexts/InputContext';
const Header = () => {

  const { inputOfSearch, onChangeSearch, inputOfImage, onChangeImage } = useContext(InputContext);
  return <div className="ui fixed menu">
    <div className="ui container center">
      <input type="text" name="search" placeholder='enter query' value={inputOfSearch} onChange={onChangeSearch} />
      <input type="text" name="image" placeholder='photo type' value={inputOfImage} onChange={onChangeImage} />
    </div>
  </div>

}

export default Header;