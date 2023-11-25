import { useEffect } from 'react';
import { getVideoList } from './Redux/Slices/contentSlice';
import {useDispatch,useSelector} from 'react-redux';

function App() {

  const dispatch = useDispatch();
  const contents = useSelector((state)=>state?.contents?.contentList);

  useEffect(()=>{
    if(!contents){
      dispatch(getVideoList());
    }
    
  },[]);

  return (
    <div data-theme="light" className='min-h-[100vh] flex flex-col'>
      hello
    </div>
  );
}

export default App;
