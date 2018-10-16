import { Component, OnInit } from "@angular/core";
import { Project } from "../../models/project";
import { ProjectService } from "../../services/project/project.service";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { Response } from "selenium-webdriver/http";
@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.css"],
  providers: [ProjectService]
})
export class CreateComponent implements OnInit {
  public title: string;
  public project: Project;
  constructor(private _projectService: ProjectService) {
    this.title = "Crear Poryecto";
    this.project = new Project("", "", "", "", 2019, "", "");
  }

  ngOnInit() {}
  onSubmit(form) {
    console.log(this.project);
    this._projectService.saveProject(this.project).subscribe(
      response => {
        return response;
      },
      error => {
        console.log(error);
      }
    );
  }
}
