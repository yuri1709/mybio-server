import { Injectable } from '@nestjs/common';
import { firestore } from 'firebase-admin';
import { FieldValue } from 'firebase-admin/firestore';
import { PessoaInfo } from 'src/core/models/pessoa.interface';
import { InitializeFirebase } from 'src/firebase-config';
InitializeFirebase();

const db = firestore();

@Injectable()
export class PerfilService {

    constructor(){}

    // public async insertDocument(pessoa: PessoaInfo) {
    //     try{
    //         const res = await db.collection('myBio').doc('pessoas').set(pessoa, {merge: true})
    //         return true
            
    //     } catch(err) {
    //         console.log(err)
    //         return false
    //     }
    // }

    public async arrayUnion(pessoa: PessoaInfo) {
        try{
            const res = await db.collection('myBio').doc('pessoas')
            .update({perfis: FieldValue.arrayUnion(pessoa)})
            return true
            
        } catch(err) {
            console.log(err)
            return false
        }
    }

    public async getAllDocuments() {
        try {
            return db.collection('myBio').doc('pessoas').get().then(doc => {
                return doc.exists ? doc.data() : null
            })
        }
        catch(err) {
            console.log(err)
            return false
        }
    }
}
