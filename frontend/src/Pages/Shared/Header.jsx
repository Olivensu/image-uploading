import React from 'react'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import second from '../../img/logo.svg'
import TextField from '@mui/material/TextField';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Autocomplete from '@mui/material/Autocomplete';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const Header = () => {

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  // Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  {
    title: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
  },
  {
    title: 'Star Wars: Episode V - The Empire Strikes Back',
    year: 1980,
  },
  { title: 'Forrest Gump', year: 1994 },
  { title: 'Inception', year: 2010 },
  {
    title: 'The Lord of the Rings: The Two Towers',
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: 'Goodfellas', year: 1990 },
  { title: 'The Matrix', year: 1999 },
  { title: 'Seven Samurai', year: 1954 },
  {
    title: 'Star Wars: Episode IV - A New Hope',
    year: 1977,
  },
  { title: 'City of God', year: 2002 },
  { title: 'Se7en', year: 1995 },
  { title: 'The Silence of the Lambs', year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: 'Life Is Beautiful', year: 1997 },
  { title: 'The Usual Suspects', year: 1995 },
  { title: 'Léon: The Professional', year: 1994 },
  { title: 'Spirited Away', year: 2001 },
  { title: 'Saving Private Ryan', year: 1998 },
  { title: 'Once Upon a Time in the West', year: 1968 },
  { title: 'American History X', year: 1998 },
  { title: 'Interstellar', year: 2014 },
  { title: 'Casablanca', year: 1942 },
  { title: 'City Lights', year: 1931 },
  { title: 'Psycho', year: 1960 },
  { title: 'The Green Mile', year: 1999 },
  { title: 'The Intouchables', year: 2011 },
  { title: 'Modern Times', year: 1936 },
  { title: 'Raiders of the Lost Ark', year: 1981 },
  { title: 'Rear Window', year: 1954 },
  { title: 'The Pianist', year: 2002 },
  { title: 'The Departed', year: 2006 },
  { title: 'Terminator 2: Judgment Day', year: 1991 },
  { title: 'Back to the Future', year: 1985 },
  { title: 'Whiplash', year: 2014 },
  { title: 'Gladiator', year: 2000 },
  { title: 'Memento', year: 2000 },
  { title: 'The Prestige', year: 2006 },
  { title: 'The Lion King', year: 1994 },
  { title: 'Apocalypse Now', year: 1979 },
  { title: 'Alien', year: 1979 },
  { title: 'Sunset Boulevard', year: 1950 },
  {
    title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
    year: 1964,
  },
  { title: 'The Great Dictator', year: 1940 },
  { title: 'Cinema Paradiso', year: 1988 },
  { title: 'The Lives of Others', year: 2006 },
  { title: 'Grave of the Fireflies', year: 1988 },
  { title: 'Paths of Glory', year: 1957 },
  { title: 'Django Unchained', year: 2012 },
  { title: 'The Shining', year: 1980 },
  { title: 'WALL·E', year: 2008 },
  { title: 'American Beauty', year: 1999 },
  { title: 'The Dark Knight Rises', year: 2012 },
  { title: 'Princess Mononoke', year: 1997 },
  { title: 'Aliens', year: 1986 },
  { title: 'Oldboy', year: 2003 },
  { title: 'Once Upon a Time in America', year: 1984 },
  { title: 'Witness for the Prosecution', year: 1957 },
  { title: 'Das Boot', year: 1981 },
  { title: 'Citizen Kane', year: 1941 },
  { title: 'North by Northwest', year: 1959 },
  { title: 'Vertigo', year: 1958 },
  {
    title: 'Star Wars: Episode VI - Return of the Jedi',
    year: 1983,
  },
  { title: 'Reservoir Dogs', year: 1992 },
  { title: 'Braveheart', year: 1995 },
  { title: 'M', year: 1931 },
  { title: 'Requiem for a Dream', year: 2000 },
  { title: 'Amélie', year: 2001 },
  { title: 'A Clockwork Orange', year: 1971 },
  { title: 'Like Stars on Earth', year: 2007 },
  { title: 'Taxi Driver', year: 1976 },
  { title: 'Lawrence of Arabia', year: 1962 },
  { title: 'Double Indemnity', year: 1944 },
  {
    title: 'Eternal Sunshine of the Spotless Mind',
    year: 2004,
  },
  { title: 'Amadeus', year: 1984 },
  { title: 'To Kill a Mockingbird', year: 1962 },
  { title: 'Toy Story 3', year: 2010 },
  { title: 'Logan', year: 2017 },
  { title: 'Full Metal Jacket', year: 1987 },
  { title: 'Dangal', year: 2016 },
  { title: 'The Sting', year: 1973 },
  { title: '2001: A Space Odyssey', year: 1968 },
  { title: "Singin' in the Rain", year: 1952 },
  { title: 'Toy Story', year: 1995 },
  { title: 'Bicycle Thieves', year: 1948 },
  { title: 'The Kid', year: 1921 },
  { title: 'Inglourious Basterds', year: 2009 },
  { title: 'Snatch', year: 2000 },
  { title: '3 Idiots', year: 2009 },
  { title: 'Monty Python and the Holy Grail', year: 1975 },
];

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
     <div className='flex items-center justify-center'>
     <Autocomplete
      sx={{ mx: '10px', flex: 1 }}
        freeSolo
        id="free-solo-2-demo"
        className=''
        disableClearable
        options={top100Films.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
          
            {...params}
            label="Search your Desire items..."
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
      <button className='btn bg-orange hover:bg-green '><SearchIcon   className=''/></button>
      
     </div>
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className=''>
      <div className='flex sm:flex-col md:flex-row  justify-between max-w-screen-xl mx-auto'>
        <div className='flex justify-start items-center my-2'>
          <span className='mx-4'>Account</span>
          <span className='mx-4'>Track Order</span>
          <span className='mx-4'>Support</span>
        </div>
        <div className='flex justify-end md:inline sm:hidden'>
          <select className="select select-ghost border-0">
            <option className=' text-lg' disabled selected>
              United State
            </option>
            <option className=' text-lg'>Bangladesh</option>
            <option className=' text-lg'>India</option>
            <option className=' text-lg'>China</option>
          </select>
          <select className="select select-ghost border-0">
            <option className=' text-lg' disabled selected>
              USD
            </option>
            <option className=' text-lg'>BDT</option>
          </select>
          <select className="select select-ghost border-0">
            <option className=' text-lg' disabled selected>
              English
            </option>
            <option className=' text-lg'>Bangla</option>
          </select>
          
        </div>
      </div>
      <hr />
      
    <div className='flex justify-between items-center max-w-screen-xl mx-auto my-2'>

    <img className='w-24 md:w-28 lg:w-36 ml-3 ' src={second} alt="" />
    {/* <IconButton sx={{  }} aria-label="menu">
        <img className='w-2/3 md:w-full' src={second} alt="" />
      </IconButton> */}
      {/* <InputBase
        
        placeholder="Search your Desire items..."
        inputProps={{ 'aria-label': 'search google maps' }}
      /> */}
      <Autocomplete
      sx={{ mx: '10px', flex: 1, }}
        freeSolo
        id="free-solo-2-demo"
        className=''
        disableClearable
        options={top100Films.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
          
            {...params}
            label="Search your Desire items..."
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
      <button className='btn bg-orange hover:bg-green md:px-5 '><SearchIcon   className=''/></button>
      <div className='flex justify-end'>
      <Divider sx={{ height: 28, m: 1 }} orientation="vertical" />
      <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
        <AddShoppingCartIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 1 }} orientation="vertical" />
      <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
        <AccountCircleIcon />
      </IconButton>
      </div>
    </div>
    <div className='bg-yellow pt-2'>
      <div className='max-w-screen-xl mx-auto flex justify-between items-center'>
          <div className='inline lg:hidden'>
          {['left',].map((anchor) => (
            <React.Fragment key={anchor}>
              <Button onClick={toggleDrawer(anchor, true)}>
                <MenuIcon />
              </Button>
              <SwipeableDrawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
                onOpen={toggleDrawer(anchor, true)}
              >
                {list(anchor)}
              </SwipeableDrawer>
            </React.Fragment>
          ))}
        </div>
        
        <ul className="menu hidden lg:inline bg-white w-56 rounded-t-xl ml-3">
          <li>
            <details >
              <summary><MenuIcon /> <span className='text-black'>All Categories</span></summary>
              <ul className='absolute'>
                <li><a>level 2 item 1</a></li>
                <li><a>level 2 item 2</a></li>
              </ul>
            </details>
          </li>
        </ul>
        <ul className="menu ml-3">
          <li>
            <details >
              <summary>Home</summary>
              <ul className='absolute w-56 mt-5'>
                <li><a>level 2 item 1</a></li>
                <li><a>level 2 item 2</a></li>
              </ul>
            </details>
          </li>
        </ul>
        <ul className="menu ml-3">
          <li>
            <details >
              <summary>Home</summary>
              <ul className='absolute w-56 mt-5'>
                <li><a>level 2 item 1</a></li>
                <li><a>level 2 item 2</a></li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
    </div>
  );
}

export default Header