import { buildConfig } from 'payload/config';
import Catagory from './collections/Catagory';
import FormSubmissions from './collections/FormSubmissions';
import Posts from './collections/Posts';
import Users from './collections/Users';
import Site from './globals/Site';

export default buildConfig({
  serverURL: 'http://localhost:3000',
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,
    Catagory,
    Posts,
    FormSubmissions

  ],
  
  globals:[
    Site
  ]
});
