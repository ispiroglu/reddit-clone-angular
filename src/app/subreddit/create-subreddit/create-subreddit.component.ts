import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SubredditService } from 'src/app/shared/subreddit/subreddit.service';
import { CreateSubredditPayload } from './create-subreddit.model';

@Component({
  selector: 'app-create-subreddit',
  templateUrl: './create-subreddit.component.html',
  styleUrls: ['./create-subreddit.component.css']
})
export class CreateSubredditComponent implements OnInit {

  subredditForm: FormGroup

  constructor(private router: Router,
              private subredditService: SubredditService) { }

  ngOnInit(): void {
    this.subredditForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('')
    })
  }

  onSubmit() {
    const payload : CreateSubredditPayload = {
      name: this.subredditForm.value.name,
      desc: this.subredditForm.value.description,
    }

    this.subredditService.createSubreddit(payload).subscribe(
      response => {
        console.log(response);
        // this.router.navigateByUrl('/list-subreddits');
      }, error => {
        console.log(error);
      }
    )

  }

  discard() {
    this.router.navigate(['/']) // Confirmation !
  }

}
