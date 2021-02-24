import mongoose from 'mongoose';
import { PasswordService } from '../services/password';

// An interface that describes the properties
// that are required to create a new user.
interface UserAttributes {
  email: string;
  password: string;
}

// An interface that describes the properties
// that a UserDoccument has
interface UserDocument extends mongoose.Document {
  email: string;
  password: string;
  creationDate: Date;
}

// An ineterface that describes the properties
// that a UserModel has
interface UserModel extends mongoose.Model<UserDocument> {
  build(userAttrs: UserAttributes): UserDocument;
}

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  creationDate: {
    type: Date,
    default: Date.now
  },
}, {
  // Massage the return value so it is consistent.
  // This not a conventional way of doing this.
  // In a MVC pattern the view would typically doing this.
  toJSON: {
    transform(doc, ret) {
      ret.id = ret._id;
      delete ret._id;
      delete ret.password;
      delete ret.__v;      
    }
  }
});

// Convert the password to a hashed
UserSchema.pre('save', async function(done) {
  if (this.isModified('password')) {
    const hashedPass = await PasswordService.convertToHash(
      this.get('password')
    );
    this.set('password', hashedPass);
    done();
  }
})

UserSchema.statics.build = (userAttrs: UserAttributes) => {
  return new User(userAttrs)
}

const User = mongoose.model<UserDocument, UserModel>("User", UserSchema);

export { User };