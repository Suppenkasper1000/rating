import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {Rating} from '../models/rating';
import {map} from "rxjs/operators";

@Injectable()
export class RatingService {
  private ratingCollection: AngularFirestoreCollection<Rating>;
  rating: Observable<Rating[]>;

  constructor(private db: AngularFirestore) {
    this.ratingCollection = db.collection('ratings', ref => ref.orderBy('rating', 'desc'));
  }

  getRatings(): Observable<any> {
    return this.rating = this.ratingCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Rating;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }
}
