import mongoose from "mongoose";
declare const Resume: mongoose.Model<{
    title: string;
    public: boolean;
    template: string;
    accent_color: string;
    professional_summary: string;
    skills: string[];
    experience: mongoose.Types.DocumentArray<{
        description?: string | null;
        company?: string | null;
        position?: string | null;
        start_date?: string | null;
        end_date?: string | null;
        is_current?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        description?: string | null;
        company?: string | null;
        position?: string | null;
        start_date?: string | null;
        end_date?: string | null;
        is_current?: string | null;
    }> & {
        description?: string | null;
        company?: string | null;
        position?: string | null;
        start_date?: string | null;
        end_date?: string | null;
        is_current?: string | null;
    }>;
    project: mongoose.Types.DocumentArray<{
        name?: string | null;
        type?: string | null;
        description?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        name?: string | null;
        type?: string | null;
        description?: string | null;
    }> & {
        name?: string | null;
        type?: string | null;
        description?: string | null;
    }>;
    education: mongoose.Types.DocumentArray<{
        institution?: string | null;
        degree?: string | null;
        graducation_date?: string | null;
        field?: string | null;
        gpa?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        institution?: string | null;
        degree?: string | null;
        graducation_date?: string | null;
        field?: string | null;
        gpa?: string | null;
    }> & {
        institution?: string | null;
        degree?: string | null;
        graducation_date?: string | null;
        field?: string | null;
        gpa?: string | null;
    }>;
    userId?: mongoose.Types.ObjectId | null;
    personal_info?: {
        email: string;
        image: string;
        full_name: string;
        profession: string;
        phone: string;
        location: string;
        linkedin: string;
        website: string;
    } | null;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    title: string;
    public: boolean;
    template: string;
    accent_color: string;
    professional_summary: string;
    skills: string[];
    experience: mongoose.Types.DocumentArray<{
        description?: string | null;
        company?: string | null;
        position?: string | null;
        start_date?: string | null;
        end_date?: string | null;
        is_current?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        description?: string | null;
        company?: string | null;
        position?: string | null;
        start_date?: string | null;
        end_date?: string | null;
        is_current?: string | null;
    }> & {
        description?: string | null;
        company?: string | null;
        position?: string | null;
        start_date?: string | null;
        end_date?: string | null;
        is_current?: string | null;
    }>;
    project: mongoose.Types.DocumentArray<{
        name?: string | null;
        type?: string | null;
        description?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        name?: string | null;
        type?: string | null;
        description?: string | null;
    }> & {
        name?: string | null;
        type?: string | null;
        description?: string | null;
    }>;
    education: mongoose.Types.DocumentArray<{
        institution?: string | null;
        degree?: string | null;
        graducation_date?: string | null;
        field?: string | null;
        gpa?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        institution?: string | null;
        degree?: string | null;
        graducation_date?: string | null;
        field?: string | null;
        gpa?: string | null;
    }> & {
        institution?: string | null;
        degree?: string | null;
        graducation_date?: string | null;
        field?: string | null;
        gpa?: string | null;
    }>;
    userId?: mongoose.Types.ObjectId | null;
    personal_info?: {
        email: string;
        image: string;
        full_name: string;
        profession: string;
        phone: string;
        location: string;
        linkedin: string;
        website: string;
    } | null;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
    minimize: false;
}> & Omit<{
    title: string;
    public: boolean;
    template: string;
    accent_color: string;
    professional_summary: string;
    skills: string[];
    experience: mongoose.Types.DocumentArray<{
        description?: string | null;
        company?: string | null;
        position?: string | null;
        start_date?: string | null;
        end_date?: string | null;
        is_current?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        description?: string | null;
        company?: string | null;
        position?: string | null;
        start_date?: string | null;
        end_date?: string | null;
        is_current?: string | null;
    }> & {
        description?: string | null;
        company?: string | null;
        position?: string | null;
        start_date?: string | null;
        end_date?: string | null;
        is_current?: string | null;
    }>;
    project: mongoose.Types.DocumentArray<{
        name?: string | null;
        type?: string | null;
        description?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        name?: string | null;
        type?: string | null;
        description?: string | null;
    }> & {
        name?: string | null;
        type?: string | null;
        description?: string | null;
    }>;
    education: mongoose.Types.DocumentArray<{
        institution?: string | null;
        degree?: string | null;
        graducation_date?: string | null;
        field?: string | null;
        gpa?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        institution?: string | null;
        degree?: string | null;
        graducation_date?: string | null;
        field?: string | null;
        gpa?: string | null;
    }> & {
        institution?: string | null;
        degree?: string | null;
        graducation_date?: string | null;
        field?: string | null;
        gpa?: string | null;
    }>;
    userId?: mongoose.Types.ObjectId | null;
    personal_info?: {
        email: string;
        image: string;
        full_name: string;
        profession: string;
        phone: string;
        location: string;
        linkedin: string;
        website: string;
    } | null;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
    minimize: false;
}, {
    title: string;
    public: boolean;
    template: string;
    accent_color: string;
    professional_summary: string;
    skills: string[];
    experience: mongoose.Types.DocumentArray<{
        description?: string | null;
        company?: string | null;
        position?: string | null;
        start_date?: string | null;
        end_date?: string | null;
        is_current?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        description?: string | null;
        company?: string | null;
        position?: string | null;
        start_date?: string | null;
        end_date?: string | null;
        is_current?: string | null;
    }> & {
        description?: string | null;
        company?: string | null;
        position?: string | null;
        start_date?: string | null;
        end_date?: string | null;
        is_current?: string | null;
    }>;
    project: mongoose.Types.DocumentArray<{
        name?: string | null;
        type?: string | null;
        description?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        name?: string | null;
        type?: string | null;
        description?: string | null;
    }> & {
        name?: string | null;
        type?: string | null;
        description?: string | null;
    }>;
    education: mongoose.Types.DocumentArray<{
        institution?: string | null;
        degree?: string | null;
        graducation_date?: string | null;
        field?: string | null;
        gpa?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        institution?: string | null;
        degree?: string | null;
        graducation_date?: string | null;
        field?: string | null;
        gpa?: string | null;
    }> & {
        institution?: string | null;
        degree?: string | null;
        graducation_date?: string | null;
        field?: string | null;
        gpa?: string | null;
    }>;
    userId?: mongoose.Types.ObjectId | null;
    personal_info?: {
        email: string;
        image: string;
        full_name: string;
        profession: string;
        phone: string;
        location: string;
        linkedin: string;
        website: string;
    } | null;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    title: string;
    public: boolean;
    template: string;
    accent_color: string;
    professional_summary: string;
    skills: string[];
    experience: mongoose.Types.DocumentArray<{
        description?: string | null;
        company?: string | null;
        position?: string | null;
        start_date?: string | null;
        end_date?: string | null;
        is_current?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        description?: string | null;
        company?: string | null;
        position?: string | null;
        start_date?: string | null;
        end_date?: string | null;
        is_current?: string | null;
    }> & {
        description?: string | null;
        company?: string | null;
        position?: string | null;
        start_date?: string | null;
        end_date?: string | null;
        is_current?: string | null;
    }>;
    project: mongoose.Types.DocumentArray<{
        name?: string | null;
        type?: string | null;
        description?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        name?: string | null;
        type?: string | null;
        description?: string | null;
    }> & {
        name?: string | null;
        type?: string | null;
        description?: string | null;
    }>;
    education: mongoose.Types.DocumentArray<{
        institution?: string | null;
        degree?: string | null;
        graducation_date?: string | null;
        field?: string | null;
        gpa?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        institution?: string | null;
        degree?: string | null;
        graducation_date?: string | null;
        field?: string | null;
        gpa?: string | null;
    }> & {
        institution?: string | null;
        degree?: string | null;
        graducation_date?: string | null;
        field?: string | null;
        gpa?: string | null;
    }>;
    userId?: mongoose.Types.ObjectId | null;
    personal_info?: {
        email: string;
        image: string;
        full_name: string;
        profession: string;
        phone: string;
        location: string;
        linkedin: string;
        website: string;
    } | null;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
    minimize: false;
}>> & Omit<{
    title: string;
    public: boolean;
    template: string;
    accent_color: string;
    professional_summary: string;
    skills: string[];
    experience: mongoose.Types.DocumentArray<{
        description?: string | null;
        company?: string | null;
        position?: string | null;
        start_date?: string | null;
        end_date?: string | null;
        is_current?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        description?: string | null;
        company?: string | null;
        position?: string | null;
        start_date?: string | null;
        end_date?: string | null;
        is_current?: string | null;
    }> & {
        description?: string | null;
        company?: string | null;
        position?: string | null;
        start_date?: string | null;
        end_date?: string | null;
        is_current?: string | null;
    }>;
    project: mongoose.Types.DocumentArray<{
        name?: string | null;
        type?: string | null;
        description?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        name?: string | null;
        type?: string | null;
        description?: string | null;
    }> & {
        name?: string | null;
        type?: string | null;
        description?: string | null;
    }>;
    education: mongoose.Types.DocumentArray<{
        institution?: string | null;
        degree?: string | null;
        graducation_date?: string | null;
        field?: string | null;
        gpa?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        institution?: string | null;
        degree?: string | null;
        graducation_date?: string | null;
        field?: string | null;
        gpa?: string | null;
    }> & {
        institution?: string | null;
        degree?: string | null;
        graducation_date?: string | null;
        field?: string | null;
        gpa?: string | null;
    }>;
    userId?: mongoose.Types.ObjectId | null;
    personal_info?: {
        email: string;
        image: string;
        full_name: string;
        profession: string;
        phone: string;
        location: string;
        linkedin: string;
        website: string;
    } | null;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: mongoose.SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: mongoose.SchemaDefinitionProperty<any, any, mongoose.Document<unknown, {}, {
        title: string;
        public: boolean;
        template: string;
        accent_color: string;
        professional_summary: string;
        skills: string[];
        experience: mongoose.Types.DocumentArray<{
            description?: string | null;
            company?: string | null;
            position?: string | null;
            start_date?: string | null;
            end_date?: string | null;
            is_current?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            description?: string | null;
            company?: string | null;
            position?: string | null;
            start_date?: string | null;
            end_date?: string | null;
            is_current?: string | null;
        }> & {
            description?: string | null;
            company?: string | null;
            position?: string | null;
            start_date?: string | null;
            end_date?: string | null;
            is_current?: string | null;
        }>;
        project: mongoose.Types.DocumentArray<{
            name?: string | null;
            type?: string | null;
            description?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            name?: string | null;
            type?: string | null;
            description?: string | null;
        }> & {
            name?: string | null;
            type?: string | null;
            description?: string | null;
        }>;
        education: mongoose.Types.DocumentArray<{
            institution?: string | null;
            degree?: string | null;
            graducation_date?: string | null;
            field?: string | null;
            gpa?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            institution?: string | null;
            degree?: string | null;
            graducation_date?: string | null;
            field?: string | null;
            gpa?: string | null;
        }> & {
            institution?: string | null;
            degree?: string | null;
            graducation_date?: string | null;
            field?: string | null;
            gpa?: string | null;
        }>;
        userId?: mongoose.Types.ObjectId | null;
        personal_info?: {
            email: string;
            image: string;
            full_name: string;
            profession: string;
            phone: string;
            location: string;
            linkedin: string;
            website: string;
        } | null;
    } & mongoose.DefaultTimestampProps, {
        id: string;
    }, mongoose.ResolveSchemaOptions<{
        timestamps: true;
        minimize: false;
    }>> & Omit<{
        title: string;
        public: boolean;
        template: string;
        accent_color: string;
        professional_summary: string;
        skills: string[];
        experience: mongoose.Types.DocumentArray<{
            description?: string | null;
            company?: string | null;
            position?: string | null;
            start_date?: string | null;
            end_date?: string | null;
            is_current?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            description?: string | null;
            company?: string | null;
            position?: string | null;
            start_date?: string | null;
            end_date?: string | null;
            is_current?: string | null;
        }> & {
            description?: string | null;
            company?: string | null;
            position?: string | null;
            start_date?: string | null;
            end_date?: string | null;
            is_current?: string | null;
        }>;
        project: mongoose.Types.DocumentArray<{
            name?: string | null;
            type?: string | null;
            description?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            name?: string | null;
            type?: string | null;
            description?: string | null;
        }> & {
            name?: string | null;
            type?: string | null;
            description?: string | null;
        }>;
        education: mongoose.Types.DocumentArray<{
            institution?: string | null;
            degree?: string | null;
            graducation_date?: string | null;
            field?: string | null;
            gpa?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            institution?: string | null;
            degree?: string | null;
            graducation_date?: string | null;
            field?: string | null;
            gpa?: string | null;
        }> & {
            institution?: string | null;
            degree?: string | null;
            graducation_date?: string | null;
            field?: string | null;
            gpa?: string | null;
        }>;
        userId?: mongoose.Types.ObjectId | null;
        personal_info?: {
            email: string;
            image: string;
            full_name: string;
            profession: string;
            phone: string;
            location: string;
            linkedin: string;
            website: string;
        } | null;
    } & mongoose.DefaultTimestampProps & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    title: string;
    public: boolean;
    template: string;
    accent_color: string;
    professional_summary: string;
    skills: string[];
    experience: mongoose.Types.DocumentArray<{
        description?: string | null;
        company?: string | null;
        position?: string | null;
        start_date?: string | null;
        end_date?: string | null;
        is_current?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        description?: string | null;
        company?: string | null;
        position?: string | null;
        start_date?: string | null;
        end_date?: string | null;
        is_current?: string | null;
    }> & {
        description?: string | null;
        company?: string | null;
        position?: string | null;
        start_date?: string | null;
        end_date?: string | null;
        is_current?: string | null;
    }>;
    project: mongoose.Types.DocumentArray<{
        name?: string | null;
        type?: string | null;
        description?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        name?: string | null;
        type?: string | null;
        description?: string | null;
    }> & {
        name?: string | null;
        type?: string | null;
        description?: string | null;
    }>;
    education: mongoose.Types.DocumentArray<{
        institution?: string | null;
        degree?: string | null;
        graducation_date?: string | null;
        field?: string | null;
        gpa?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        institution?: string | null;
        degree?: string | null;
        graducation_date?: string | null;
        field?: string | null;
        gpa?: string | null;
    }> & {
        institution?: string | null;
        degree?: string | null;
        graducation_date?: string | null;
        field?: string | null;
        gpa?: string | null;
    }>;
    userId?: mongoose.Types.ObjectId | null;
    personal_info?: {
        email: string;
        image: string;
        full_name: string;
        profession: string;
        phone: string;
        location: string;
        linkedin: string;
        website: string;
    } | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    title: string;
    public: boolean;
    template: string;
    accent_color: string;
    professional_summary: string;
    skills: string[];
    experience: mongoose.Types.DocumentArray<{
        description?: string | null;
        company?: string | null;
        position?: string | null;
        start_date?: string | null;
        end_date?: string | null;
        is_current?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        description?: string | null;
        company?: string | null;
        position?: string | null;
        start_date?: string | null;
        end_date?: string | null;
        is_current?: string | null;
    }> & {
        description?: string | null;
        company?: string | null;
        position?: string | null;
        start_date?: string | null;
        end_date?: string | null;
        is_current?: string | null;
    }>;
    project: mongoose.Types.DocumentArray<{
        name?: string | null;
        type?: string | null;
        description?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        name?: string | null;
        type?: string | null;
        description?: string | null;
    }> & {
        name?: string | null;
        type?: string | null;
        description?: string | null;
    }>;
    education: mongoose.Types.DocumentArray<{
        institution?: string | null;
        degree?: string | null;
        graducation_date?: string | null;
        field?: string | null;
        gpa?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        institution?: string | null;
        degree?: string | null;
        graducation_date?: string | null;
        field?: string | null;
        gpa?: string | null;
    }> & {
        institution?: string | null;
        degree?: string | null;
        graducation_date?: string | null;
        field?: string | null;
        gpa?: string | null;
    }>;
    userId?: mongoose.Types.ObjectId | null;
    personal_info?: {
        email: string;
        image: string;
        full_name: string;
        profession: string;
        phone: string;
        location: string;
        linkedin: string;
        website: string;
    } | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export default Resume;
//# sourceMappingURL=resumeModel.d.ts.map